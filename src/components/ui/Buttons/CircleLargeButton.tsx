import { FC } from 'react';

interface Props {
  url: string;
  label: string;
}

export const CircleLargeButton: FC<Props> = ({ url, label }) => {
  return (
    <a
      href={url}
      className='circle-button uppercase ff-serif fs-600 text-dark  bg-white'
    >
      {label}
    </a>
  );
};
