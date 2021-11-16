const Artist = {
  render: async () => {
    const view = /* html */ `
    <main>
      <h2>Категории художники</h2>
      <div class="category__conatainer col-12 d-flex flex-row justify-content-between align-items-center flex-wrap"
      style="margin: 0 auto; max-width: 1550px;">
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./assets/img/10.webp" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Реализм <span style="color: red;">(5/10)</span></h5>
            <a href="/#/artist-game" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Импрессионизм <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Религия <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Портреты <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Ренессанс <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Живопись <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Пейзаж <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Морской пейзаж <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Авангард <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
        <div class="card" style="width: 18rem; min-width: 270px;">
          <img src="./1.jpg" class="card-img-top" alt="art">
          <div class="card-body">
            <h5 class="card-title">Сюрреализм <span style="color: red;">(5/10)</span></h5>
            <a href="#" class="btn btn-secondary" style="margin-left: 70%;">Играть</a>
          </div>
        </div>
      </div>
    </main>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Artist;
