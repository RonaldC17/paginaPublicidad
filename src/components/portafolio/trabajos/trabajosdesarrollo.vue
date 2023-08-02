<template>
  <div>
    <div class="portfolio-component mini-spacer mt-15">
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col cols="12" md="12" lg="12" xl="12">
            <div class="text-center mb-5">
              <h2 class="titulogen">
                <b> DESARROLLO WEB </b>
              </h2>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            sm="6"
            class="mb-4 px-4 mt-5"
            v-for="card in portfolio"
            :key="card.title">
            <v-card
              class="portfolio-card overflow-hidden card-shadow fill-height">
              <h5 class="font-weight-medium font-18">{{ card.publicity }}</h5>
              <div class="portfolio-img">
                <v-img
                  :src="require(`@/assets/portfolio/DesarrolloWeb/${card.img}`)"
                  :alt="card.img"
                  class="img-fluid"
                ></v-img>
              </div>
              <div class="text-center mt-5">
                <v-card-text class="pa-5">
                  <h5 class="titulo">{{ card.title }}</h5>
                </v-card-text>
                <v-card-text>
                  <p class="font-14 mb-0 text-muted">{{ card.subtext }}</p>
                </v-card-text>
              </div>
              <!-- <div class="text-center mt-5">
                    <v-card-text class="pa-5">        
                       <h5 class="font-weight-medium font-18"> {{ card.description }}</h5>
                    </v-card-text>
                </div> -->
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row justify="center" no-gutters>
          <v-col cols="12" md="12" lg="12" xl="12">
            <div class="text-center">
              <v-btn
                href="../../../components/portafolio/portafoliogeneral/todoslostrabajos.vue"
                variant="outlined"
                color="black"
                id="botoninformacion">
                Ver Proyectos
              </v-btn>
            </div>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "planes",
  data() {
    return {
      portfolio: [
        {
          img: "dripgang.png",
          title: "Tienda Drip Gang",
          subtext: "Tienda de Ropa",
        },
        {
          img: "sinnergy12.png",
          title: "Sinnergy12",
          subtext: "Venta de Cannabis Medicinal",
        },
        // {
        //   img: 'img3.jpg',
        //   title: 'Social Ads',
        //   subtext: '$800.000',
        //   description: 'Creación y entendimiento de Buyer persona',
        // },
      ],
      // portfolio2: [
      //   {
      //     img: 'img4.jpg',
      //     title: 'Landing Page',
      //     subtext: '$600.000',
      //     description: 'Desarrollo de Landing Page simple para tu negocio',

      //   },
      //   {
      //     img: 'img5.jpg',
      //     title: 'Página web Profesional',
      //     subtext: '$750.000',
      //     description: 'Desarrollo de una Página Web Profesional para tu negocio',
      //   },
      //   {
      //     img: 'img6.jpg',
      //     title: 'E-Commerce',
      //     subtext: '$1.000.000',
      //     description: 'Desarrollo de una Tienda Online - E-Commerce para tu negocio',
      //   },
      // ],
    };
  },
};
</script>

<style scoped>
.portfolio-card {
  position: relative;
}

.portfolio-card .portfolio-img {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, filter 0.3s;
}

.portfolio-card:hover .portfolio-img {
  transform: scale(1.1);
  filter: brightness(0.7);
}

.portfolio-card .portfolio-img .img-fluid {
  width: 100%;
  height: auto;
}

.titulo {
  font-size: 20px;
  font-family: monospace;
  font-weight: bold;
  color: #000000;
}

.titulogen {
  font-size: 2rem;
  font-family: monospace;
  color: #000000;
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 600px) and (max-width: 759px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 760px) and (max-width: 959px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 960px) and (max-width: 1023px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }

  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}

@media screen and (min-width: 1441px) {
  .portfolio-card {
    position: relative;
  }

  .portfolio-card .portfolio-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, filter 0.3s;
  }

  .portfolio-card:hover .portfolio-img {
    transform: scale(1.1);
    filter: brightness(0.7);
  }

  .portfolio-card .portfolio-img .img-fluid {
    width: 100%;
    height: auto;
  }
  .titulo {
    font-size: 20px;
    font-family: monospace;
    font-weight: bold;
    color: #000000;
  }

  .titulogen {
    font-size: 2rem;
    font-family: monospace;
    color: #000000;
  }
}
</style>
