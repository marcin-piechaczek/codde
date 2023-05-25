import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { Project } from '@/lib/services/github/fetchGithubRepos';

export const ProjectCard = ({
  owner,
  dependencies,
  repoName,
  vscodeOnline,
  forkCount,
  stars,
  description,
  createdAt,
  updatedAt,
  url,
}: Project) => {
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  } satisfies Intl.DateTimeFormatOptions;

  return (
    <div className="card card-side flex-col bg-base-100 shadow-xl">
      <div className="mockup-code">
        <pre className="max-h-40 overflow-y-scroll">
          <code>{JSON.stringify(dependencies, null, 2)}</code>
        </pre>
      </div>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Text tag="span" className="neutral-content text-sm">
              created: {createdAtDate.toLocaleDateString('en-GB', options)}
            </Text>
            <Text tag="span" className="neutral-content text-sm">
              updated: {updatedAtDate.toLocaleDateString('en-GB', options)}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text tag="span" className="neutral-content text-sm">
              stars: {stars}
            </Text>
            <Text tag="span" className="neutral-content text-sm">
              forks: {forkCount}
            </Text>
          </div>
        </div>
        <Heading tag="h3" className="card-title mb-2 mt-2">
          {owner}: {repoName}
        </Heading>
        <Text tag="p" className="text-sm">
          {description}
        </Text>
        <div className="card-actions mt-6 justify-between">
          <a href={vscodeOnline} target="_blank" className="btn-outline btn" rel="noreferrer">
            Open in VSCode online
          </a>
          <a href={url} target="_blank" className="btn-primary btn" rel="noreferrer">
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};
