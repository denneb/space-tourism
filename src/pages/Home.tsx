import { Navigation } from '../components/ui/Navigation';

import logo from '../assets/shared/logo.svg';

import data from '../data/data.json';
import { CircleLargeButton } from '../components/ui/Buttons';
import { MainLayout } from '../components/layout';

export const Home = () => {
  return (
    <>
      <header className='header flex'>
        <div>
          <img src={logo} alt='space tourism logo' className='header_logo' />
        </div>
        <Navigation />
      </header>
      <div className='grid-container'>
        <div>
          <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>
            So, you want to travel to{' '}
            <span className='d-block fs-900 ff-serif text-white'>Space</span>
          </h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
        <div>
          <CircleLargeButton url={'#'} label={'Explore'} />
        </div>
      </div>
    </>
  );
};
