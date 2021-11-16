const Navbar = {
  render: async () => {
    const view = /* html */ `
    <header>
      <nav
        class="navbar navbar-dark bg-dark"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          margin-right: 0;
        "
      >
      <a
        class="navbar-brand"
        href="#home"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 150px;
        "
      >
        <img
          src="./noun_Art_4214244.svg"
          width="50"
          height="50"
          class="d-inline-block"
          alt=""
          style="filter: invert(1)"
        />
        <span>Art Quiz</span>
      </a>

      <a class="nav-link" href="/#/setings"
        ><img
          src="./noun_Settings_1396269.svg"
          width="30"
          height="30"
          class="d-inline-block"
          alt=""
          style="filter: invert(1)"
      /></a>
    </nav>
  </header>`;
    return view;
  },
  after_render: async () => { },

};

export default Navbar;
