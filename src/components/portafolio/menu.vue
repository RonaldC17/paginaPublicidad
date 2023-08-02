<template>
  <header>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="hidden-lg-and-up contenedorhamb"
    >
      <v-row no-gutters>
        <v-img
          src="../../assets/portfolio/Logos/TARGET-PUBLICITY-SF.png"
          class="logomenuhamb"
        ></v-img>
      </v-row>
      <v-row no-gutters>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="contenidohamburguesa">
              <router-link :to="item.route">{{ item.title }}</router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>

    <v-row class="menunormal hidden-md-and-down">
      <v-col lg="2" xl="4" class="text-left fotomenu">
        <v-img
          src="../../assets/portfolio/Logos/TARGET-PUBLICITY-SF.png"
          class="logo"
        ></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col lg="10" xl="8" class="text-right botonesmenu">
        <router-link to="/inicio" class="ml-5 mr-5">INICIO</router-link>
        <router-link to="/portafolio" class="ml-5 mr-5">PORTAFOLIO</router-link>
        <router-link to="/contactos" class="ml-5 mr-5">CONTACTO</router-link>
      </v-col>
    </v-row>
    <v-row class="d-xl-none" no-gutters>
      <v-col>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-xl-and-up iconohamburguesa"
        ></v-app-bar-nav-icon>
      </v-col>
    </v-row>
  </header>
  <section scroll class="siguiente"></section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      appTitle: "Awesome App",
      menuItems: [
        { title: "Inicio", icon: "mdi-home", route: "/inicio" },
        { title: "Portafolio", icon: "mdi-folder", route: "/portafolio" },
        { title: "Contacto", icon: "mdi-email", route: "/contactos" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var header = document.querySelector("header");
      header.classList.toggle("abajo", window.scrollY > 0);
    });
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  redirectToWhatsApp() {
    const whatsappURL = "https://api.whatsapp.com/send?phone=3238146440";
    window.open(whatsappURL, "_blank");
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.logo {
  width: 100%;
  height: 100px;
}

.menunormal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.iconohamburguesa {
  float: right;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  transition: 0.7s;
  padding: 1px 10px;
  z-index: 20;
  transition: 0.3s;
}

header.abajo {
  background: #eceff1;
  padding: 5px 10px;
}

.siguiente {
  background: url("../../assets/portfolio/Banners/inicio.png");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.botonesmenu a {
  font-family: "Lato Black", sans-serif;
  font-weight: bold;
  text-decoration: none;
}

.botonesmenu a:hover {
  color: #07a5c3;
}

.contenedorhamb {
  background: #eceff1;
}

/* @media screen and (min-width: 0px) and (max-width: 320px) {
  .menu-container {
  margin-top: 150px; 
}
  .navbar-toggler {
    position: absolute;
    right: 20px;
  }
  .imagen{
    width: 100px;
    height: 50px;
  }
} */

@media screen and (min-width: 321px) and (max-width: 480px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }

  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3vh;
  }
  header.abajo {
    background: #eceff1;
    padding: 5px 10px;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 10px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }
  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }
  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3.2vh;
  }

  header.abajo {
    background: #eceff1;
    padding: 5px 10px;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 5px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }

  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3vh;
  }

  header.abajo {
    background: #eceff1;
    padding: 5px 10px;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 15px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}
@media screen and (min-width: 769px) and (max-width: 960px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3vh;
  }
  header.abajo {
    background: #eceff1;
    padding: 25px 10px;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 25px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}
@media screen and (min-width: 961px) and (max-width: 1024px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }

  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3vh;
  }

  header.abajo {
    background: #eceff1;
    padding: 50px 10px;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 50px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1199px) {
  .contenedorhamb {
    background: #eceff1;
  }

  .contenidohamburguesa a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }

  .contenidohamburguesa a:hover {
    color: #07a5c3;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .iconohamburguesa {
    float: right;
    font-size: 3.5vh;
  }

  header.abajo {
    background: #eceff1;
    padding: 50px 30px;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 50px 10px;
    z-index: 20;
    transition: 0.5s;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .logo {
    width: 100%;
    height: 100px;
  }

  .menunormal {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconohamburguesa {
    float: right;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 10px 10px;
    z-index: 20;
    transition: 0.5s;
  }

  header.abajo {
    background: #eceff1;
    padding: 10px 30px;
  }

  .siguiente {
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .botonesmenu a {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }

  .botonesmenu a:hover {
    color: #07a5c3;
  }

  .contenedorhamb {
    display: none;
  }
}
@media screen and (min-width: 1441px) and (max-width: 2560px) {
  * {
    margin: 0;
    padding: 0;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 30px 10px;
    z-index: 20;
  }

  header.abajo {
    background: #a6a6a6;
    padding: 20px 15px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }
  header .imagen {
    position: relative;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header ul li .nav-link {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 600;
    transition: 0.7s;
  }

  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/portafolio.png");
    background-size: cover;
    background-position: center center;
  }

  .menunormal {
    font-size: 30px;
    transform: translateX(-10vh);
  }

  .menu-hamburguesa {
    display: none;
  }
}
</style>
