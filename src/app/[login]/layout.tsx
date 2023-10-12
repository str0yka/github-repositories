import s from './layout.module.css';

export const generateMetadata = ({ params }: { params: { login: string } }) => ({
  title: `${params.login} / Repositories`
});

interface ProfileLayoutProps {
  profile: React.ReactNode;
  repositories: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profile, repositories }) => (
  <div className={s.pageContainer}>
    <div className={s.profileContainer}>{profile}</div>
    <div className={s.contentContainer}>{repositories}</div>
  </div>
);

export default ProfileLayout;
