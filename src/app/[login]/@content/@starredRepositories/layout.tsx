import { Group } from '~components/ui';

import { SearchRepository } from './_components';

interface StarredRepositoriesLayoutProps {
  children: React.ReactNode;
}

const StarredRepositoriesLayout: React.FC<StarredRepositoriesLayoutProps> = ({ children }) => (
  <>
    <Group>
      <SearchRepository />
    </Group>
    {children}
  </>
);

export default StarredRepositoriesLayout;
