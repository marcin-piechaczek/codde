import { Container } from '@/components/Container';
import { Projects } from '@/components/Projects';
import { SkeletonGrid } from '@/components/SkeletonGrid';
import { Wrapper } from '@/components/Wrapper';
import { Suspense } from 'react';

interface HomePageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || 1;

  return (
    <div>
      <Container>
        <Wrapper>
          <Suspense fallback={<SkeletonGrid elements={4} />}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error /> */}
            {search && <Projects page={page} search={search} />}
          </Suspense>
        </Wrapper>
      </Container>
    </div>
  );
}
