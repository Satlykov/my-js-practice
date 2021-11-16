const Bottombar = {
  render: async () => {
    const view = /* html */ `
      <footer>
        <a href="https://rs.school/" style="height: 35px;">
          <img src="./rs_school.svg" alt="" srcset="" style="height: 100%;">
        </a>
        <a href="https://github.com/rolling-scopes-school/satlykov-JSFE2021Q3/tree/art-quiz"
        class="nav-link" style="color: rgb(33, 37, 41);"><h5>Satlykov 2021 год</h5></a>
        <a href="https://github.com/Satlykov">
          <img src="./noun_github_4289652.svg" alt="" srcset="" style="height: 50px">
        </a>
      </footer>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Bottombar;
