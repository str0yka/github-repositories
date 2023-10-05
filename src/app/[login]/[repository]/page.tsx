interface RepositoryPageProps {
  params: {
    login: string;
    repository: string;
  };
}

const RepositoryPage: React.FC<RepositoryPageProps> = ({ params }) => (
  <div>
    {params.login}/{params.repository}
  </div>
);

export default RepositoryPage;
