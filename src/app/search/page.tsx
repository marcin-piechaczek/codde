import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';
import { SkeletonGrid } from '@/components/SkeletonGrid';
import { Wrapper } from '@/components/Wrapper';
import { Suspense } from 'react';

interface SearchProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const searchedPackage = searchParams?.package || '';
  const page = searchParams?.page || 1;

  return (
    <Container>
      <Wrapper>
        <Suspense fallback={<SkeletonGrid elements={4} />}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error /> */}
          {searchedPackage && <Projects page={page} search={searchedPackage} />}
        </Suspense>
      </Wrapper>
    </Container>
  );
}
