const header = document.querySelector(".header");
const navbar = document.createElement("div");
navbar.innerHTML = `
<div class="bg-dark">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="font-weight-bold mr-5">videojuegos</div>
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
                <a class="nav-link text-white active" href="#">iniciar sesion</a>
                <a class="nav-link text-white" href="#">ayuda</a>
                <a class="nav-link text-white" href="#">about us</a>
                <a class="nav-link text-white">registrarse</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
`;
header.append(navbar);
