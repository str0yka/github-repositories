import s from './Menu.module.css';
import { Group, GroupTitle } from './components';

interface MenuProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export const Menu = ({ children, ...props }: MenuProps) => (
  <div
    {...props}
    className={s.menuContainer}
  >
    {children}
  </div>
);

Menu.Group = Group;
Menu.GroupTitle = GroupTitle;
