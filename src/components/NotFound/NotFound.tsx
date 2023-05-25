import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { NextImage } from '@/components/NextLink';
import { Wrapper } from '@/components/Wrapper/Wrapper';

interface NotFoundProps {
  statusCode?: number;
  message?: string;
}

export default function NotFound({ statusCode, message }: NotFoundProps = {}) {
  return (
    <Container>
      <Wrapper>
        <div className="grid h-full place-items-center">
          {statusCode && (
            <Heading tag="h1" className="mb-10">
              {statusCode}
            </Heading>
          )}
          <NextImage
            src="/images/not_found.png"
            alt="Not Found"
            width={224}
            height={246}
            className="mb-20"
          />
          <div>
            <Heading tag="h3">{message || 'Oooops, not found.'}</Heading>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
