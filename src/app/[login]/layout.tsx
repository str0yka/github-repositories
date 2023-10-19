import { Container } from '~components/ui';

import s from './layout.module.css';

interface ProfileLayoutProps {
  profile: React.ReactNode;
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profile, children }) => (
  <Container>
    <div className={s.pageContainer}>
      <div className={s.profileContainer}>{profile}</div>
      <div className={s.contentContainer}>{children}</div>
    </div>
  </Container>
);

export default ProfileLayout;
