import { FC, useEffect, useState } from 'react';
import CrewMember from '../components/crew/CrewMember';
import { MainLayout } from '../components/layout';
import { getCrewMembers } from '../helpers/getData';
import { Crew } from '../interfaces/pages';
import TabCrew from '../components/crew/TabCrew';

interface pageState {
  activeCrewMember?: Crew;
  crewList: Crew[];
}

const initialState = {
  crewList: [],
};

export const CrewPage: FC = () => {
  const [pageState, setPageState] = useState<pageState>(initialState);
  const { crewList, activeCrewMember } = pageState;

  useEffect(() => {
    const crewMembersList = getCrewMembers();

    if (crewMembersList.length >= 1)
      setPageState((state) => ({
        ...state,
        crewList: crewMembersList,
        activeCrewMember: crewMembersList[0],
      }));
  }, []);

  const handleClick = (crewMember: string) => {
    const newActiveCrewMember = crewList.find(
      (item) => item.name === crewMember
    );
    if (newActiveCrewMember)
      setPageState((state) => ({
        ...state,
        activeCrewMember: newActiveCrewMember,
      }));
  };

  return (
    <MainLayout className={'crew'}>
      <main className='grid-container grid-container__crew flow'>
        <h1 className='numbered-title'>
          <span aria-hidden='true'>02</span> Meet your crew
        </h1>

        <div className='dot-indicators flex' aria-label='crew member list'>
          {crewList &&
            crewList.map(({ name }) => {
              let isActive = false;
              if (activeCrewMember?.name === name) isActive = true;
              return (
                <TabCrew
                  key={`cm-${name}`}
                  label={name}
                  onClick={handleClick}
                  isActive={isActive}
                />
              );
            })}
        </div>

        {activeCrewMember && <CrewMember crewMember={activeCrewMember} />}
      </main>
    </MainLayout>
  );
};
