import { FC } from 'react';
import { Crew } from '../../interfaces/pages';
interface Props {
  crewMember: Crew;
}
const CrewMember: FC<Props> = ({ crewMember }) => {
  const { name, bio, role, images } = crewMember;
  return (
    <>
      <article className='crew-details flow'>
        <header className='flow flow--space-small'>
          <h2 className='fs-600 ff-serif uppercase'>{role}</h2>
          <p className='fs-700 uppercase ff-serif'>{name}</p>
        </header>
        <p>{bio}</p>
      </article>

      <img src={images.png} alt={name} />
    </>
  );
};

export default CrewMember;
