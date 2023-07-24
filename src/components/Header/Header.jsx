import { Container } from 'components/Container/Container';
import { Logo, PageHeader } from './Header.styled';

export const Header = () => {
  return (
    <PageHeader>
      <Container>
        <Logo>
          <span>Web</span>Market
        </Logo>
      </Container>
    </PageHeader>
  );
};
