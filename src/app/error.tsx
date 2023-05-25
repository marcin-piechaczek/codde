'use client';
import '../app/globals.css';
import { Warning } from '@/components/Alert';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { Wrapper } from '@/components/Wrapper/Wrapper';

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <Container>
      <Wrapper>
        <div className="grid h-full place-items-center">
          <div>
            <Heading tag="h1">Something went wrong!</Heading>
            <Text tag="p" className="mt-4 text-error">
              {error.message}
            </Text>
            <div className="mb-10 mt-10 max-w-fit">
              <Warning>
                If you are using the default GitHub token, it may reach its limits. Consider using
                your own personal token instead.
              </Warning>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
