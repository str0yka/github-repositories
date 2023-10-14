import s from './layout.module.css';

interface ProfileLayoutProps {
  profile: React.ReactNode;
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profile, children }) => (
  <div className={s.pageContainer}>
    <div className={s.profileContainer}>{profile}</div>
    <div className={s.contentContainer}>{children}</div>
  </div>
);

export default ProfileLayout;
