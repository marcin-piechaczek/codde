import { Container } from '@/components/Container';
import { NextLink } from '@/components/NextImage';

export const Navbar = () => {
  return (
    <div className="bg-base-100">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <NextLink href="/" className="btn-ghost btn text-xl normal-case">
              codde
            </NextLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  className="github-button"
                  href="https://github.com/marcin-piechaczek/codde"
                  data-color-scheme="no-preference: dark_high_contrast; dark_high_contrast: dark_high_contrast; dark: dark;"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star marcin-piechaczek/codde on GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  Star
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
