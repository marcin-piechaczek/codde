import { DependenciesObject } from '@/lib/services/github/fetchRepoDetails';

export const decodeGithubContent = (content: string): DependenciesObject => {
  return {
    dependenciesObject: JSON.parse(atob(content)),
  };
};
