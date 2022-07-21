function SpaceTravelApp() {
  return (
    <div className='mainLayout bg-dark'>
      <div className='container'>
        <h1>Design system</h1>

        <h2 className='numbered-title'>
          <span>01</span> colors
        </h2>

        <div className='mt-3'>
          <nav>
            <ul className='primary-navigation underline-indicators  flex gap-3'>
              <li className='active'>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>01</span>Active
                </a>
              </li>
              <li>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>02</span>Hovered
                </a>
              </li>
              <li>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>03</span>Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex mt-3 p-1'>
          <div>
            <a
              href=''
              className='circle-button uppercase ff-serif text-dark fs-600 bg-white'
            >
              Explore
            </a>
          </div>

          <div className='flow'>
            <div className='tab-list underline-indicators flex'>
              <button
                aria-selected='true'
                className='uppercase text-accent bg-dark ff-sans-cond letter-spacing-2'
              >
                Moon
              </button>
              <button
                aria-selected='false'
                className='uppercase text-accent bg-dark ff-sans-cond letter-spacing-2'
              >
                Mars
              </button>
              <button
                aria-selected='false'
                className='uppercase text-accent bg-dark ff-sans-cond letter-spacing-2'
              >
                Europa
              </button>
            </div>
            <div className='dot-indicators flex'>
              <button aria-selected='true'>
                <span className='sr-only'>Slide title</span>
              </button>
              <button aria-selected='false'>
                <span className='sr-only'>Slide title</span>
              </button>
              <button aria-selected='false'>
                <span className='sr-only'>Slide title</span>
              </button>
            </div>

            <div className='number-indicators flex'>
              <button className='fs-600 ff-serif ' aria-selected='true'>
                1
              </button>
              <button className='fs-600 ff-serif ' aria-selected='false'>
                2
              </button>
              <button className='fs-600 ff-serif ' aria-selected='false'>
                3
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SpaceTravelApp;
