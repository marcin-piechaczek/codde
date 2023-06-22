import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';
import { Wrapper } from '@/components/Wrapper';

interface SearchProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const revalidate = 3600;

export default async function SearchPage({ searchParams }: SearchProps) {
  const searchedPackage = searchParams?.package || '';
  const page = searchParams?.page || 1;

  return (
    <Container>
      <Wrapper>
        {searchedPackage && <Projects page={+page} search={searchedPackage as string} />}
      </Wrapper>
    </Container>
  );
}
