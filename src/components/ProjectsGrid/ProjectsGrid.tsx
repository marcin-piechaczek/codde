import NotFound from '@/components/NotFound/NotFound';
import { Pagination } from '@/components/Pagination';
import { ProjectCard } from '@/components/ProjectCard';
import { Project } from '@/lib/services/github/fetchGithubRepos';

interface ProjectsGridProps {
  projects: Project[];
  totalPages: number;
}

export const ProjectsGrid = ({ projects, totalPages }: ProjectsGridProps) => {
  return (
    <div>
      <div className="mb-5">
        <Pagination totalPages={totalPages} />
      </div>
      {!projects.length ? (
        <NotFound message="None of these projects have your package at dependencies, keep going." />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
      {projects.length > 5 && (
        <div className="mt-5">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};
