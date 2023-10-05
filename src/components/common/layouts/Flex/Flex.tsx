import s from './Flex.module.css';

interface FlexProps {
  d?: 'row' | 'column';
  jc?: 'space-between' | 'space-around' | 'center';
  ai?: 'center' | 'flex-start' | 'flex-end';
  g?: number;
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ d, jc, ai, g, children }) => (
  <div
    className={s.flex}
    style={{ flexDirection: d, justifyContent: jc, alignItems: ai, gap: g }}
  >
    {children}
  </div>
);
