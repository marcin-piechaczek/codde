import { githubPagesLimit, perPageLimit } from '@/lib/services/github/config';
import { fetchRepoDetails } from '@/lib/services/github/fetchRepoDetails';
import { Octokit } from '@octokit/rest';

export const TECH_LANGUAGES = {
  typescript: 'language:typescript+language:javascript',
  php: 'language:php',
};

export const PACKAGE_MANAGERS_FILE = {
  typescript: 'package.json',
  php: 'composer.json',
};

export type TechLanguages = keyof typeof TECH_LANGUAGES | undefined;
export type PackageManagers = keyof typeof PACKAGE_MANAGERS_FILE | undefined;

export interface FetchGithubRepos {
  keyword: string;
  page?: number;
  language?: TechLanguages;
  packageManager?: PackageManagers;
  token?: string;
}

export interface Project {
  id: string;
  owner: string;
  repoName: string;
  description: string;
  createdAt: string;

  updatedAt: string;
  forkCount: number;
  url: string;
  vscodeOnline: string;
  stars: number;
  dependencies: { [key: string]: string } | undefined;
}

export const fetchGithubRepos = async ({
  keyword,
  token,
  language,
  packageManager,
  page = 1,
}: FetchGithubRepos) => {
  const octokit = new Octokit({
    auth: token || process.env.GITHUB_TOKEN,
  });
  const searchLang = language ? TECH_LANGUAGES[language] : TECH_LANGUAGES.typescript;

  const response = await octokit.rest.search
    .repos({
      q: `"${keyword}"+${searchLang}`,
      per_page: perPageLimit,
      page,
      headers: {
        Accept: 'application/vnd.github+json',
      },
    })
    .catch(error => {
      throw new Error('Error during search ' + error.message);
    });

  const repositories = response.data.items;
  const githubSearchLimit = Number((response.data.total_count / perPageLimit).toFixed());
  const totalPages = githubSearchLimit > githubPagesLimit ? githubPagesLimit : githubSearchLimit;

  const repoDetails = await fetchRepoDetails({
    repositories,
    packageManager,
    client: octokit,
    keyword,
    tech: language,
  });

  const projects = repoDetails.filter(Boolean) as Project[];

  return { projects, totalPages };
};
