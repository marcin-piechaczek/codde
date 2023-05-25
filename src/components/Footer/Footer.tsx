import { Container } from '@/components/Container';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <p>
        codde.app - {year} - This page utilizes cookies for GTM analytics. If you like this project,
        please consider leaving a star 🙏
      </p>
    </Container>
  );
};
