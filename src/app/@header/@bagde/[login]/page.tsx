import Link from 'next/link';

import { Button } from '~components/ui';
import { ROUTES } from '~utils/constants';

interface BagdeProfileProps {
  params: {
    login: string;
  };
}

const BagdeProfile: React.FC<BagdeProfileProps> = ({ params }) => (
  <Link href={ROUTES.PROFILE(params.login)}>
    <Button variant='transparented'>{params.login}</Button>
  </Link>
);

export default BagdeProfile;
