import s from './GroupTitle.module.css';

interface GroupTitleProps {
  children: React.ReactNode;
}

export const GroupTitle = ({ children }: GroupTitleProps) => (
  <h3 className={s.groupTitle}>{children}</h3>
);
