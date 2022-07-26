import { MainLayout } from '../components/layout';

export const Destination = () => {
  return (
    <MainLayout className={'destination'}>
      <main className='grid-container grid-container__destination flow'>
        <h1 className='numbered-title'>
          <span>01</span> Pick your destination
        </h1>
        <img
          src={require('../assets/destination/image-moon.png')}
          alt='The moon'
        />
        <div className='tab-list underline-indicators flex'>
          <button
            aria-selected='true'
            className='uppercase ff-sans-cond text-accent  letter-spacing-2'
          >
            Moon
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent  letter-spacing-2'
          >
            Mars
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent  letter-spacing-2'
          >
            Europa
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent letter-spacing-2'
          >
            Titan
          </button>
        </div>
        <article className='destination-info flow'>
          <h2 className='fs-800 uppercase ff-serif'>Moon</h2>

          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className='flex destination-meta '>
            <div className=''>
              <h3 className='text-accent fs-300 uppercase'>Avg. distance</h3>
              <p className=' ff-serif uppercase'>384,400 km</p>
            </div>
            <div>
              <h3 className='text-accent fs-300 uppercase'>Est. travel time</h3>
              <p className='ff-serif uppercase'>3 days</p>
            </div>
          </div>
        </article>
      </main>
    </MainLayout>
  );
};
