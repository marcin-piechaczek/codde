import { getDependencies } from '@/lib/services/github/dependencies';
import {
  PACKAGE_MANAGERS_FILE,
  PackageManagers,
  TechLanguages,
} from '@/lib/services/github/fetchGithubRepos';
import { decodeGithubContent } from '@/lib/services/github/helpers/decodeGithubContent';
// import type { Octokit } from '@octokit/rest';
import { Octokit } from '@octokit/core';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

interface FetchRepoDetailsInput {
  repositories: GetResponseDataTypeFromEndpointMethod<Octokit['request']>[];
  packageManager: PackageManagers;
  tech?: TechLanguages;
  client: Octokit;
  keyword: string;
}

export interface Content {
  content: string;
}

export interface AllDependencies {
  data: Content;
}

export type DependenciesObject = {
  dependenciesObject?: unknown;
};

export const dependenciesObjectGuard = (packageJson: unknown): packageJson is AllDependencies => {
  return (
    !!packageJson &&
    typeof packageJson === 'object' &&
    typeof (packageJson as AllDependencies).data === 'object'
  );
};

export const fetchRepoDetails = async ({
  repositories,
  packageManager,
  tech = 'typescript',
  client,
  keyword,
}: FetchRepoDetailsInput) => {
  return await Promise.all(
    repositories.map(async repository => {
      const owner = repository.owner.login;
      const repoName = repository.name;
      const id = repository.id;

      const packageManagerFile = packageManager
        ? PACKAGE_MANAGERS_FILE[packageManager]
        : PACKAGE_MANAGERS_FILE.typescript;

      const packageFile = await client
        .request(`GET /repos/${owner}/${repoName}/contents/${packageManagerFile}`, {
          owner,
          repo: repoName,
        })
        .catch(error => {
          if (error.status === 404) {
            // Skipping: Sometimes the repository may not have a package.json, and that's okay.
            return;
          } else {
            throw new Error('Error during fetching package.json, ' + error.message);
          }
        });

      const dependenciesObject =
        dependenciesObjectGuard(packageFile) && decodeGithubContent(packageFile.data.content);

      if (dependenciesObject) {
        const repoUrl = repository.html_url;
        const vscodeOnline = repoUrl.replace('github.com', 'github1s.com');

        const dependencies = getDependencies({ dependenciesObject, tech });

        if (dependencies && Object.hasOwn(dependencies, keyword)) {
          return {
            id,
            owner,
            repoName,
            description: repository.description,
            createdAt: repository.created_at,
            updatedAt: repository.updated_at,
            forkCount: repository.forks_count,
            stars: repository.stargazers_count,
            url: repository.html_url,
            vscodeOnline,
            dependencies,
          };
        }
      }
    }),
  );
};
