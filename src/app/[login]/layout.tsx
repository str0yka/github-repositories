import s from './layout.module.css';

interface ProfileLayoutProps {
  profile: React.ReactNode;
  content: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profile, content }) => (
  <div className={s.pageContainer}>
    <div className={s.profileContainer}>{profile}</div>
    <div className={s.contentContainer}>{content}</div>
  </div>
);

export default ProfileLayout;
