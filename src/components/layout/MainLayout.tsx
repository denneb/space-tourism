import { FC } from 'react';

interface Props {
  className: string;
  children?: React.ReactNode | undefined;
}

export const MainLayout: FC<Props> = ({ children, className }) => {
  return <div className={`mainLayout ${className}`}>{children}</div>;
};
