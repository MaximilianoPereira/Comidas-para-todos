// 1.MODO OSCURO
// const modoActivo = document.body.classList.contains("modo-oscuro")
// const btnModo = document.getElementById("btn-modo")
// btnModo.addEventListener("click", () => { document.body.classList.toggle("modo-oscuro") })

// 2.MENU NAVBAR DINAMICO
const navBar = document.getElementById("navegacion")
navBar.innerHTML = `
        <nav class="navbar navbar-expand-md st-navbar-main">
            <div class="container-fluid st-navbar-container">
                <div class="navbar-brand st-navbar-brand">
                    <a class="st-navbar-brand-text">Comida para todos</a>
                    <button class="navbar-toggler st-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" id="btnHamb">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse st-navbar-collapse" id="navMenu">
                    <ul class="navbar-nav st-navbar-nav">
                        <li class="nav-item st-nav-item"><a class="nav-link st-nav-link" href="./index.html">Inicio</a></li>
                        <li class="nav-item st-nav-item"><a class="nav-link st-nav-link" href="./programas.html">Programas</a></li>
                        <li class="nav-item st-nav-item"><a class="nav-link st-nav-link" href="./nosotros.html">Nosotros</a></li>
                        <li class="nav-item st-nav-item"><a class="nav-link st-nav-link" href="./contactos.html">Contactos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `

// 3.EFECTO MENU NAVBAR HAMBURGUESA
const navMenu = document.getElementById("navMenu")
const btnHamb = document.getElementById("btnHamb")
btnHamb.addEventListener("click", () => { navMenu.classList.toggle("show") })

// 4.VALIDACIÓN DEL FORMULARIO DE INSCRIPCION
const formInscripcion = document.getElementById("form-inscripcion");
const msgInscripcion = document.getElementById("msg-inscripcion");

formInscripcion.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre-inscripcion").value.trim();

  if (!nombre) {
    msgInscripcion.textContent = "Ingresá tu nombre para sumarte.";
    msgInscripcion.className = "error";
    return;
  }

  msgInscripcion.textContent = `¡Gracias, ${nombre}! Te contactaremos lo antes posible.`;
  msgInscripcion.className = "exito";
  formInscripcion.reset();
});