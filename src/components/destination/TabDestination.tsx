import { FC } from 'react';

interface Props {
  label: string;
  isActive?: boolean;
  onClick: (nameDestination: string) => void;
}

export const TabDestination: FC<Props> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={() => {
        onClick(label);
      }}
      className={`uppercase ff-sans-cond text-accent  letter-spacing-2 ${
        isActive ? 'active-tab' : ''
      }`}
    >
      {label}
    </button>
  );
};
