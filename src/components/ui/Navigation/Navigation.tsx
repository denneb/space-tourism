import { FC } from 'react';
import { NavigationItem } from './NavigationItem';

interface Props {
  className?: string;
}

export const Navigation: FC<Props> = ({ className = '' }) => {
  return (
    <nav className=''>
      <ul
        id='primary-navigation'
        className={
          className + ` primary-navigation underline-indicators  flex gap-3 `
        }
      >
        <NavigationItem labelIndex={'00'} label={'Home'} url={'/'} />
        <NavigationItem
          labelIndex={'01'}
          label={'Destination'}
          url={'/destination'}
        />
        <NavigationItem labelIndex={'02'} label={'Crew'} url={'/crew'} />
        <NavigationItem
          labelIndex={'03'}
          label={'Technology'}
          url={'/technology'}
        />
      </ul>
    </nav>
  );
};
