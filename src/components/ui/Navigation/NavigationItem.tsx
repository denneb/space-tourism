import { FC } from 'react';

interface Props {
  labelIndex: string;
  label: string;
  url: string;
  className?: string;
}
export const NavigationItem: FC<Props> = ({
  labelIndex,
  label,
  url,
  className = '',
}) => {
  return (
    <li className={className}>
      <a
        className='ff-sans-cond uppercase text-white letter-spacing-2'
        href={url}
      >
        <span>{labelIndex}</span>
        {label}
      </a>
    </li>
  );
};
