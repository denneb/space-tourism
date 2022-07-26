import { MainLayout } from '../components/layout';

export const Crew = () => {
  return (
    <MainLayout className={'crew'}>
      <main className='grid-container grid-container__crew flow'>
        <h1 className='numbered-title'>
          <span aria-hidden='true'>02</span> Meet your crew
        </h1>

        <div className='dot-indicators flex'>
          <button aria-selected='true'>
            <span className='sr-only'>The commander</span>
          </button>
          <button aria-selected='false'>
            <span className='sr-only'>The mission specialist</span>
          </button>
          <button aria-selected='false'>
            <span className='sr-only'>The pilot</span>
          </button>
          <button aria-selected='false'>
            <span className='sr-only'>The crew engineer</span>
          </button>
        </div>

        <article className='crew-details flow'>
          <header className='flow flow--space-small'>
            <h2 className='fs-600 ff-serif uppercase'>Commander</h2>
            <p className='fs-700 uppercase ff-serif'>Douglas Hurley</p>
          </header>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>

        <img
          src={require('../assets/crew/image-douglas-hurley.png')}
          alt='Douglas Hurley'
        />
      </main>
    </MainLayout>
  );
};
