<template>
  <div
    src="../../assets/portfolio/variadas/fondoblanco1.jpg"
    class="team-component mini-spacer text-center"
  >
    <div>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center mt-10">
              <p class="section-description custom-style">
                ¡EL EQUIPO DE TRABAJO IDEAL PARA IMPULSAR TU NEGOCIO!
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-15" no-gutters>
          <v-col cols="12" md="6" sm="6" v-for="card in team" :key="card.title">
            <v-card elevation="0" class="team-card mx-auto">
              <div class="social-overlay">
                <div class="image-wrapper">
                  <v-img
                    :src="
                      require(`@/assets/portfolio/fotoPersonas/${card.img}`)
                    "
                    :alt="card.img"
                    class="imagenperfil mx-auto"
                    cover
                    height="250"
                  />
                  <v-img
                    :src="
                      require(`@/assets/portfolio/fotoPersonas/${card.hoverImg}`)
                    "
                    :alt="card.img"
                    class="imagenhover mx-auto"
                    cover
                    height="250"
                  />
                </div>
                <div class="img-overlay text-center">
                  <ul>
                    <li
                      v-for="social in card.socialicon"
                      :key="social.icon"
                      class="mr-5 ml-5 mt-1 icon-items"
                    >
                      <a :href="social.url">
                        <i :class="social.icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class="team-title mt-5 mb-3">
                  <b>
                    <span class="typing-animation">{{ card.title }}</span>
                  </b>
                </h5>
                <p class="team-subtitle text-muted mb-5">
                  <span class="typing-animation">{{ card.subtitle }}</span>
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          img: "Fotomia250.png",
          hoverImg: "fotosamuel.jpg",
          title: "Ronald Camacho",
          subtitle: "Desarrollador Web Jr",
          socialicon: [
            {
              url: "/",
              icon: "mdi mdi-facebook",
            },
            {
              url: "/",
              icon: "mdi mdi-twitter",
            },
            {
              url: "/",
              icon: "mdi mdi-instagram",
            },
            {
              url: "/",
              icon: "mdi mdi-youtube",
            },
          ],
        },
        {
          img: "fotoisaias.jpg",
          hoverImg: "fotosamuel.jpg",
          title: "Isaías Bustamante",
          subtitle: "Jefe Marketing Digital",
          socialicon: [
            {
              url: "/",
              icon: "mdi mdi-facebook",
            },
            {
              url: "/",
              icon: "mdi mdi-twitter",
            },
            {
              url: "/",
              icon: "mdi mdi-instagram",
            },
            {
              url: "/",
              icon: "mdi mdi-youtube",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.imagenperfil {
  background-size: cover;
  background-position: center bottom;
}

.imagenhover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-size: cover;
  background-position: center bottom;
  width: 100%;
}

.image-wrapper:hover .imagenhover {
  opacity: 1;
}

.custom-style {
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

.team-card {
  background: #d9d9d9;
  border-radius: 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 300px;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-component {
  font-size: 3vh;
  color: #000000;
  max-height: 700px;
  background-image: url("../../assets/portfolio/variadas/fondoblanco1.jpg");
  background-size: cover;
  font-family: "Inter", sans-serif;
}

.icon-items {
  font-size: 3vh;
}

.team-title {
  margin: 20px auto;
  width: max-content;
  white-space: nowrap;
  border-right: 2px solid;
  font-size: 20px;
  animation: efecto 5s steps(16), efecto1 1s step-end infinite alternate;
}

@keyframes efecto {
  from {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes efecto1 {
  50% {
    border-color: transparent;
  }
}

/* .team-subtitle {
  font-size: 15px;
}  */

@media screen and (min-width: 321px) and (max-width: 480px) {
  .custom-style {
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    transition: transform 0.3s ease;
    max-width: 300px;
    margin-top: 25px;
  }

  .team-component {
    font-size: 2rem;
    max-height: 100%;
  }

  .icon-items {
    font-size: 4vh;
  }

  .team-subtitle {
    font-size: 3.5vh;
    font-family: monospace;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .custom-style {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    margin-top: 25px;
  }

  .team-component {
    font-family: monospace;
    color: #000000;
    max-height: 100%;
  }

  .icon-items {
    font-size: 5vh;
  }

  .team-subtitle {
    font-size: 20px;
    font-family: monospace;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .custom-style {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 250px;
  }

  .team-component {
    font-family: monospace;
    color: #000000;
    max-height: 100%;
  }

  .icon-items {
    font-size: 3vh;
  }

  .team-subtitle {
    font-size: 20px;
    font-family: monospace;
  }
}

@media screen and (min-width: 769px) and (max-width: 959px) {
  .custom-style {
    font-size: 25px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    max-height: 100%;
  }

  .team-component {
    font-family: monospace;
    color: #000000;
    height: auto;
    margin-bottom: 15px;
  }

  .icon-items {
    font-size: 4vh;
  }

  .team-subtitle {
    font-size: 20px;
    font-family: monospace;
  }
}

@media screen and (min-width: 960px) and (max-width: 1023px) {
  .custom-style {
    font-size: 25px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    max-height: 100%;
  }

  .team-component {
    font-family: monospace;
    color: #000000;
    max-height: 100%;
  }

  .icon-items {
    font-size: 4vh;
  }

  .team-subtitle {
    font-size: 20px;
    font-family: monospace;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .custom-style {
    font-size: 25px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    max-height: 100%;
  }

  .team-component {
    font-family: monospace;
    color: #000000;
    max-height: 100%;
  }

  .icon-items {
    font-size: 3.5vh;
  }

  .team-subtitle {
    font-size: 20px;
    font-family: monospace;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .custom-style {
    font-size: 25px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
  }

  .team-subtitle {
    font-size: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  .team-card {
    background: #d9d9d9;
    border-radius: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    max-height: 100%;
  }

  .team-component {
    color: #000000;
    height: auto;
  }

  .icon-items {
    font-size: 4vh;
  }

  .team-title {
    font-size: 25px;
  }
}
</style>
