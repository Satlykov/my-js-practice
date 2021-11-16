// --------------------------------
//  Define Data Sources
// --------------------------------

const Home = {
  render: async () => {
    const view = /* html */ `
      <main>
        <div class="main__container-artist-painting">
          <a class="nav-link artist-painting-card" href="/#/artist-categories">
            <h2>Художники</h2>
            <img
              src="./noun_artist_1729157.svg"
              width="250"
              height="250"
              class="d-inline-block"
              alt=""
            />
          </a>
          <a class="nav-link artist-painting-card" href="/#/painting-categories">
            <h2>Картины</h2>
            <img
              src="./noun_painting_3587965.svg"
              width="250"
              height="250"
              class="d-inline-block"
              alt=""
            />
          </a>
        </div>
      </main>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
