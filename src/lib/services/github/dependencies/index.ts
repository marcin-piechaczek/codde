import { jsDependencies } from '@/lib/services/github/dependencies/jsDependencies';
import { phpDependencies } from '@/lib/services/github/dependencies/phpDependencies';
import { DependenciesObject } from '@/lib/services/github/fetchRepoDetails';

const dependenciesObjectLiteral = {
  typescript: ({ dependenciesObject }: DependenciesObject) =>
    jsDependencies({
      dependenciesObject,
    }),
  php: ({ dependenciesObject }: DependenciesObject) => phpDependencies({ dependenciesObject }),
};

type Tech = keyof typeof dependenciesObjectLiteral;

interface GetDependenciesInput {
  dependenciesObject: DependenciesObject;
  tech: Tech;
}

export const getDependencies = ({ dependenciesObject, tech }: GetDependenciesInput) => {
  if (!dependenciesObject) {
    throw new Error('No dependencies object found');
  }

  const callback = dependenciesObjectLiteral[tech];

  return callback({ dependenciesObject });
};
