import { DependenciesObject } from '@/lib/services/github/fetchRepoDetails';

interface JsDependencies {
  dependenciesObject: {
    devDependencies?: { [key: string]: string };
    dependencies?: { [key: string]: string };
  };
}

export const jsDependenciesGuard = (dependencies: unknown): dependencies is JsDependencies => {
  return !!dependencies && typeof dependencies === 'object';
};

export const jsDependencies = ({ dependenciesObject }: DependenciesObject) => {
  if (!jsDependenciesGuard(dependenciesObject)) throw new Error('No dependencies object found');
  const { dependenciesObject: content } = dependenciesObject;

  const { devDependencies, dependencies } = content;

  return { ...devDependencies, ...dependencies };
};
