import { DependenciesObject } from '@/lib/services/github/fetchRepoDetails';

interface phpDependencies {
  dependenciesObject: {
    require?: { [key: string]: string };
  };
}

export const phpDependenciesGuard = (dependencies: unknown): dependencies is phpDependencies => {
  return !!dependencies && typeof dependencies === 'object';
};

export const phpDependencies = ({ dependenciesObject }: DependenciesObject) => {
  if (!phpDependenciesGuard(dependenciesObject)) throw new Error('No dependencies object found');
  const { dependenciesObject: content } = dependenciesObject;

  const { require } = content;

  return { ...require };
};
