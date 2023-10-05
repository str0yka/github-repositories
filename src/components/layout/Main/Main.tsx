import { Container } from '~components/ui';

import s from './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className={s.main}>
    <Container>{children}</Container>
  </main>
);
