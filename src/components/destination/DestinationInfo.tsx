import { FC } from 'react';
import { Destination } from '../../interfaces/pages';

interface Props {
  destination: Destination;
  className?: string;
}

export const DestinationInfo: FC<Props> = ({ destination, className = '' }) => {
  const { name, description, distance, travel, images } = destination;

  return (
    <>
      <img src={images.png} alt={name} />
      <article className={`destination-info flow ${className}`}>
        <h2 className='fs-800 uppercase ff-serif mb-4'>{name}</h2>

        <p className='text-accent'>{description}</p>

        <div className='flex destination-meta '>
          <div className=''>
            <h3 className='text-accent fs-300 uppercase'>Avg. distance</h3>
            <p className=' ff-serif uppercase'>{distance}</p>
          </div>
          <div>
            <h3 className='text-accent fs-300 uppercase'>Est. travel time</h3>
            <p className='ff-serif uppercase'>{travel}</p>
          </div>
        </div>
      </article>
    </>
  );
};
