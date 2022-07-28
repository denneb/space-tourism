import { FC, useEffect, useState } from 'react';
import { Technology } from '../../interfaces/pages';

interface Props {
  details: Technology;
}

export const TechnologyDetails: FC<Props> = ({ details }) => {
  const [screenSize, setScreenSize] = useState<number>(0);
  const { name, description, images } = details;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <article className='technology-details flow '>
        <header className='flow flow--space-small'>
          <h2 className='fs-400 ff-sans-cond text-accent letter-spacing-1 uppercase'>
            The terminology
          </h2>
          <p className='fs-700 uppercase ff-serif mb-4'>{name}</p>
        </header>
        <p className='text-accent fs-400'>{description}</p>
      </article>

      <img
        className='image'
        src={screenSize <= 959 ? images.landscape : images.portrait}
        alt=''
      />
    </>
  );
};
