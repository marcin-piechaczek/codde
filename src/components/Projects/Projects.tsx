import { ProjectsGrid } from '@/components/ProjectsGrid';
import { fetchGithubRepos } from '@/lib/services/github/fetchGithubRepos';
import { cookies } from 'next/headers';

const defaultToken = process.env.GITHUB_TOKEN;

interface ProjectsProps {
  search: string;
  page: number;
}

export const Projects = async ({ search, page }: ProjectsProps) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('token');
  const token = cookie?.value || defaultToken;
  const { projects, totalPages } = await fetchGithubRepos({
    keyword: search.toString(),
    token: token || defaultToken,
    page,
  });

  return (
    <>
      <ProjectsGrid totalPages={totalPages || 1} projects={projects} />
    </>
  );
};
