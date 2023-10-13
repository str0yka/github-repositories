'use client';

import { useSearchParams } from 'next/navigation';

import { withTabQuery } from './_helpers';

interface ContentLayoutProps {
  repositories: React.ReactNode;
  starredRepositories: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ repositories, starredRepositories }) => {
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab') ?? '';

  return withTabQuery(tab, { repositories, starredRepositories });
};

export default ContentLayout;
