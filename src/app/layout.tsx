import type { Metadata } from 'next';

import { Header } from '~components/layout';
import { inter } from '~static/fonts';
import { cn } from '~utils/helpers';

import '~static/styles/global.css';
import '~static/styles/reset.css';
import '~static/styles/variables/colors.css';
import '~static/styles/variables/transition.css';

export const metadata: Metadata = {
  title: 'GitHub Repositories',
  description: 'Best way to find repositories'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <body className={cn(inter.variable, 'dark')}>
    <Header />
    {children}
  </body>
);

export default RootLayout;
