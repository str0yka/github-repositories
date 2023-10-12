import type { Metadata } from 'next';

import { Main } from '~components/layout';
import { inter } from '~static/fonts';
import { cn } from '~utils/helpers';

import '~static/styles/global.css';
import '~static/styles/reset.css';
import '~static/styles/variables/colors.css';
import '~static/styles/variables/transition.css';
import { Provider } from './provider';

export const metadata: Metadata = {
  title: 'GitHub Repositories',
  description: 'Best way to find repositories'
};

interface RootLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ header, children }) => (
  <html lang='en'>
    <Provider>
      <body className={cn(inter.variable, 'dark')}>
        <div id='modalContainer' />
        {header}
        <Main>{children}</Main>
      </body>
    </Provider>
  </html>
);

export default RootLayout;
