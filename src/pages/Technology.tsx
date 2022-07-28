import { FC, useEffect, useState } from 'react';
import { MainLayout } from '../components/layout';
import { Technology } from '../interfaces/pages';
import { getTechnologiesInfo } from '../helpers/getData';
import { CircleIndicator, TechnologyDetails } from '../components/technology';

interface pageState {
  activeTech?: Technology;
  techList: Technology[];
}

const initialState = {
  techList: [],
};

export const TechnologyPage: FC = () => {
  const [pageState, setPageState] = useState<pageState>(initialState);

  const { techList, activeTech } = pageState;

  useEffect(() => {
    const techList = getTechnologiesInfo();

    if (techList.length >= 1)
      setPageState((state) => ({
        ...state,
        techList: techList,
        activeTech: techList[0],
      }));
  }, []);

  const handleClick = (techDetails: string) => {
    const newActiveTech = techList.find((item) => item.name === techDetails);
    if (newActiveTech)
      setPageState((state) => ({
        ...state,
        activeTech: newActiveTech,
      }));
  };

  return (
    <MainLayout className={'technology'}>
      <main className='grid-container__technology  flow'>
        <h1 className='numbered-title'>
          <span aria-hidden='true'>03</span> Space launch 101
        </h1>

        <div className='number-indicators flex' aria-label='technology list'>
          {techList &&
            techList.map((item, index) => {
              let isActive = false;
              if (activeTech?.name === item.name) isActive = true;
              return (
                <CircleIndicator
                  name={item.name}
                  onClick={handleClick}
                  isActive={isActive}
                  key={`ni-${item.name}`}
                  label={`${index + 1}`}
                />
              );
            })}
        </div>

        {activeTech && <TechnologyDetails details={activeTech} />}
      </main>
    </MainLayout>
  );
};
