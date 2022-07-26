import { useEffect, useState } from 'react';
import { MainLayout } from '../components/layout';
import { Destination } from '../interfaces/pages';
import { getDestinations } from '../helpers/getData';
import { DestinationInfo, TabDestination } from '../components/destination';

interface pageState {
  destinations: Destination[];
  activeDestination?: Destination;
}

const initialState = {
  destinations: [],
};

export const DestinationPage = () => {
  const [pageState, setPageState] = useState<pageState>(initialState);
  const { destinations, activeDestination } = pageState;

  useEffect(() => {
    const destinationList = getDestinations();

    if (destinationList.length >= 1)
      setPageState((state) => ({
        ...state,
        destinations: destinationList,
        activeDestination: destinationList[0],
      }));
  }, []);

  const handleClick = (nameDestination: string) => {
    const newActiveDestination = destinations.find(
      (item) => item.name === nameDestination
    );
    if (newActiveDestination)
      setPageState((state) => ({
        ...state,
        activeDestination: newActiveDestination,
      }));
  };

  return (
    <MainLayout className={'destination'}>
      <main className='grid-container grid-container__destination flow'>
        <h1 className='numbered-title'>
          <span>01</span> Pick your destination
        </h1>

        <div className='tab-list underline-indicators flex'>
          {destinations &&
            destinations.map(({ name }) => {
              let isActive = false;
              if (activeDestination?.name === name) isActive = true;
              return (
                <TabDestination
                  onClick={handleClick}
                  key={`tab-${name}`}
                  label={name}
                  isActive={isActive}
                />
              );
            })}
        </div>

        {activeDestination && (
          <DestinationInfo destination={activeDestination} />
        )}
      </main>
    </MainLayout>
  );
};
