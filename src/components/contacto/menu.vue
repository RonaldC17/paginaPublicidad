<template>
  <header>
    <v-row class="contenedorbase" align="center" justify="center">
      <v-col cols="6" sm="6" md="6" lg="6" xl="6" >
        <v-img
          src="../../assets/portfolio/Logos/TARGET-PUBLICITY-SF.png"
          class="imagen"
        ></v-img>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6" xl="6">
        <nav class="navbar-expand-lg">
          <v-row justify="end">
            <div class="d-xl-none">
              <v-app-bar-nav-icon
                @click="toggleMenu"
                class="icon"
              ></v-app-bar-nav-icon>
            </div>
          </v-row>

          <v-navigation-drawer
            v-model="menuOpen"
            class="d-xl-none d-lg-none menu-hamburguesa"
          >
            <v-list class="d-xl-none d-lg-none menu-hamburguesa-lista">
              <v-col>
                <v-list-item>
                  <v-img
                    src="../../assets/portfolio/Logos/TARGET-PUBLICITY-SF.png"
                    class="menu-hamburguesa-logo"
                  ></v-img>
                </v-list-item>
              </v-col>
              <v-col>
                <v-list-item
                  v-for="nav in headerMenu"
                  :key="nav.title"
                  :class="{ active: nav.isActive }">
                  <router-link :to="nav.href" class="nav-link">
                    <b> {{ nav.title }} </b>
                  </router-link>
                </v-list-item>
              </v-col>
            </v-list>
          </v-navigation-drawer>
          <ul class="d-xl-flex menunormal">
            <v-list-item
              v-for="nav in headerMenu"
              :key="nav.title"
              :class="{ active: nav.isActive }"
            >
              <router-link :to="nav.href" class="nav-link"
                ><b> {{ nav.title }} </b></router-link
              >
            </v-list-item>
          </ul>
        </nav>
      </v-col>
    </v-row>
  </header>
  <section class="siguiente"></section>
</template>

<script>
export default {
  data() {
    return {
      headerMenu: [
        {
          title: "Inicio",
          href: "/inicio",
          isActive: false,
        },
        {
          title: "Portafolio",
          href: "/portafolio",
          isActive: false,
        },
        {
          title: "Contacto",
          href: "/contactos",
          isActive: true,
        },
      ],
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleClickOutside(event) {
      const menuElement = document.querySelector(".d-lg-none");
      const targetElement = event.target;
      if (!menuElement.contains(targetElement) && this.menuOpen) {
        this.menuOpen = false;
      }
    },
    redirectToWhatsApp() {
    const whatsappURL = 'https://api.whatsapp.com/send?phone=TUNUMERODEWHATSAPP';
    window.open(whatsappURL, '_blank');
    },
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
};
</script>

<style scoped>
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
  padding: 30px 20px;
  z-index: 20;
}

header.abajo ul li .nav-link {
  color: black;
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
  color: #000000;
  letter-spacing: 2px;
  font-weight: 600;
  transition: 0.7s;
}

.siguiente {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../../assets/portfolio/Banners/inicio.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
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
  * {
    margin: 0;
    padding: 0;
  }

  header.abajo {
    background: #b0bec5;
    padding: 1px 10px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }

  header .imagen {
    position: relative;
    width: 150px;
    height: 90px;
  }

  .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 1.1rem;
    font-family: monospace;
  }

  .menunormal {
    display: none;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  header.abajo {
    background: #b0bec5;
    padding: 1px 15px;
  }
  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }

  /* .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 1.1rem;
    font-family: monospace;
  } */

  header .imagen {
    position: relative;
    width: 125px;
    height: 80px;
  }

  .menunormal {
    display: none;
  }

  .menu-hamburguesa-lista{
    max-width: 200px;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
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
    padding: 30px 20px;
    z-index: 20;
  }

  header.abajo {
    background: #b0bec5;
    padding: 15px 20px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center center;
  }

  .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 1.1rem;
    font-family: monospace;
  }

  header .imagen {
    position: relative;
    width: 150px;
    height: 100px;
  }
  .menunormal {
    display: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 960px) {
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
    padding: 30px 20px;
    z-index: 20;
  }

  header.abajo {
    background: #b0bec5;
    padding: 15px 20px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center center;
  }

  .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 2rem;
    font-family: monospace;
    max-width: 500px;
  }

  .icon{
    font-size: 3vh;
    margin-right: 15px;
  }

  header .imagen {
    position: relative;
    width: 200px;
    height: 150px;
  }

  .menunormal {
    display: none;
  }
}
@media screen and (min-width: 961px) and (max-width: 1024px) {
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
    padding: 30px 20px;
    z-index: 20;
  }

  header.abajo {
    background: #b0bec5;
    padding: 15px 20px;
  }

  header.abajo ul li .nav-link {
    color: black;
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
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center center;
  }

  .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 1.1rem;
    font-family: monospace;
  }

  .icon{
    font-size: 3vh;
    margin-left: 15px;
  }

  header .imagen {
    position: relative;
    width: 200px;
    height: 150px;
  }

  .menunormal {
    display: none;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1199px) {
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
    padding: 30px 20px;
    z-index: 20;
  }

  header.abajo {
    background: #b0bec5;
    padding: 15px 20px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }

  header .imagen {
    position: relative;
    width: 300px;
    height: 300px;
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
    background: url("../../assets/portfolio/Banners/inicioTel.png");
    background-size: cover;
    background-position: center center;
  }

  .menu-hamburguesa {
    background-color: #ffffff;
    font-size: 1.1rem;
    font-family: monospace;
  }

  .icon{
    font-size: 3vh;
    margin-left: 15px;
  }

  header .imagen {
    position: relative;
    width: 200px;
    height: 150px;
  }

  .menunormal {
    display: none;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
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
    padding: 30px 20px;
    z-index: 20;
  }

  header.abajo {
    background: #a6a6a6;
    padding: 1px 5px;
  }

  header.abajo ul li .nav-link {
    color: black;
  }
  header .imagen {
    position: relative;
    width: 150px;
    height: 100px;
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

  .siguiente {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center center;
  }

  .menu-hamburguesa {
    display: none;
  }

  .menunormal {
    font-size: 20px;
    margin-right: 10px;
    display: flex;
  }

  .imagen {
    width: 200px;
    height: 200px;
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
    background: url("../../assets/portfolio/Banners/inicio.png");
    background-size: cover;
    background-position: center center;
  }

  .menunormal {
    font-size: 30px;
    transform: translateX(-10vh);
  }

  .menu-hamburguesa{
    display: none;
  }
}
</style>
