import { ActionSection } from '@/components/ActionSection';
import { Heading } from '@/components/Heading';
import { NextImage } from '@/components/NextLink';
import { Text } from '@/components/Text';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <NextImage src="/images/hero.png" width={550} height={400} alt="happy coding" />
        <div>
          <Heading tag="h1" className="max-w-lg">
            Discover Github code examples
          </Heading>
          <Text tag="p" className="py-6 text-neutral-content">
            Search the GitHub repository by installed dependencies. Just provide a package name to
            find inspiring usage examples.
          </Text>
          <div className="mb-10 flex items-center">
            <Text tag="p" className="text-sm text-neutral-content">
              Supported languages:
            </Text>
            <NextImage
              src="/images/ts.png"
              alt="typescript"
              className="ml-2"
              width={22}
              height={22}
            />
            <NextImage
              src="/images/js.png"
              className="ml-2"
              alt="javascript"
              width={22}
              height={22}
            />
          </div>
          <ActionSection />
        </div>
      </div>
    </div>
  );
};
