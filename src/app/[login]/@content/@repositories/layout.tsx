import { Group } from '~components/ui';

import { SearchRepository } from './_components';

interface RepositoriesLayoutProps {
  children: React.ReactNode;
}

const RepositoriesLayout: React.FC<RepositoriesLayoutProps> = ({ children }) => (
  <>
    <Group>
      <SearchRepository />
    </Group>
    {children}
  </>
);

export default RepositoriesLayout;
