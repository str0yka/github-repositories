interface ProfilePageProps {
  params: {
    login: string;
  };
  searchParams: {
    tab?: string;
  };
}

const Repositories = () => <h1>repositories</h1>;
const Profile = () => <h1>profile</h1>;

const withTabQuery = (tab?: string) => {
  if (!tab) return Profile;
  if (tab === 'repositories') return Repositories;
  return () => null;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ params, searchParams }) => {
  const Content = withTabQuery(searchParams?.tab);

  return (
    <div>
      {params.login}
      <div>
        page <Content />
      </div>
    </div>
  );
};

export default ProfilePage;
