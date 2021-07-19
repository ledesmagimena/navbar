export const navUsuario = (usuario) =>
  `<div class="bg-dark border border-danger rounded-pill">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold">
  <img class="logo rounded-circle" src="./img/logo2.jpg" alt="logo">
</div>
            <form class="form-inline ml-5">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-outline-danger mr-sm-4 my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navg navbar-nav w-100 justify-content-end">
                
                <a class="nav-link text-white" href="#">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a class="nav-link text-white" href="#">Bienvenido ${usuario.name}</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;

export const usuariosSinR = (usuario) =>
  `<div class="bg border border-danger rounded-pill">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold">
  <img class="logo rounded-circle" src="./img/logo2.jpg" alt="logo">
</div>
            <form class="form-inline ml-5">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navg navbar-nav w-100 justify-content-end">
                <a href="../formulario-login/login.html" class="nav-link text-white active">iniciar sesion</a>
                <a class="nav-link text-white" href="#">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a href="../formulario-registro/index.html" class="nav-link text-white">registrarse</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;
