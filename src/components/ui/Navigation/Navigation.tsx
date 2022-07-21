import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  return (
    <nav>
      <ul className='primary-navigation underline-indicators  flex gap-3'>
        <NavigationItem
          labelIndex={'00'}
          label={'Home'}
          url={'/home'}
          className='active'
        />
        <NavigationItem labelIndex={'01'} label={'Destination'} url={'/home'} />
        <NavigationItem labelIndex={'02'} label={'Crew'} url={'/home'} />
        <NavigationItem labelIndex={'03'} label={'Technology'} url={'/home'} />
      </ul>
    </nav>
  );
};
