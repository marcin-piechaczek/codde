import { Container } from '@/components/Container';
import { SkeletonGrid } from '@/components/SkeletonGrid';
import { Wrapper } from '@/components/Wrapper';

export default function Loading() {
  return (
    <Wrapper>
      <Container>
        <SkeletonGrid elements={4} />
      </Container>
    </Wrapper>
  );
}
