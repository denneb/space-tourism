import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  labelIndex: string;
  label: string;
  url: string;
  className?: string;
}

const classItem = 'ff-sans-cond uppercase text-white letter-spacing-2';

export const NavigationItem: FC<Props> = ({
  labelIndex,
  label,
  url,
  className = '',
}) => {
  return (
    <li>
      <NavLink className={({ isActive }: any) => classItem} to={url}>
        <span aria-hidden='true'>{labelIndex}</span>
        {label}
      </NavLink>
    </li>
  );
};
