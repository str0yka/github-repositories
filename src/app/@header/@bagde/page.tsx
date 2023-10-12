import Link from 'next/link';

import { Button } from '~components/ui';
import { ROUTES } from '~utils/constants';

const BagdeHome = () => (
  <Link href={ROUTES.HOME}>
    <Button variant='transparented'>Repositories</Button>
  </Link>
);

export default BagdeHome;
