import React, { FC } from 'react';

interface Props {
  label: string;
  name: string;
  isActive?: boolean;
  onClick: (techDetails: string) => void;
}
export const CircleIndicator: FC<Props> = ({
  label,
  isActive = false,
  onClick,
  name,
}) => {
  return (
    <button
      onClick={() => {
        onClick(name);
      }}
      className='fs-600 ff-serif '
      aria-selected={isActive}
    >
      <span className='sr-only'>{name}</span>
      {label}
    </button>
  );
};
