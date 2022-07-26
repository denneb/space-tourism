import { FC } from 'react';

interface Props {
  label: string;
  isActive?: boolean;
  onClick: (nameCrewMember: string) => void;
}

const TabCrew: FC<Props> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(label);
      }}
      aria-selected={isActive}
    >
      <span className='sr-only'>{label}</span>
    </button>
  );
};

export default TabCrew;
