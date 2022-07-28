import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
  label: string;
}

export const CircleLargeButton: FC<Props> = ({ url, label }) => {
  return (
    <Link
      to={url}
      className='circle-button uppercase ff-serif  text-dark  bg-white'
    >
      {label}
    </Link>
  );
};
