import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';
import { Wrapper } from '@/components/Wrapper';

interface SearchProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const searchedPackage = searchParams?.package || '';
  const page = searchParams?.page || 1;

  return (
    <Container>
      <Wrapper>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error /> */}
        {searchedPackage && <Projects page={page} search={searchedPackage} />}
      </Wrapper>
    </Container>
  );
}
