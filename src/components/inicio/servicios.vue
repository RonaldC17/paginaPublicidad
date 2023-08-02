<template>
  <v-parallax
    src="../../assets/portfolio/img/Img13.jpg"
    class="cajaservicios text-center">
    <div>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" md="12" lg="12" class="text-center pt-6">
            <h4 class="tituloservicios p-lg-5"><b> Nuestros Servicios </b></h4>
          </v-col>
          <v-row no-gutters class="mb-lg-n10">
            <v-col
              cols="12"
              md="6"
              lg="6"
              xl="6"
              class="mt-lg-n5 p-3 text-center">
              <v-card
                class="mx-auto columnaservicios"
                v-for="card in servicios"
                :key="card.title">
                <v-img
                  class="imagen"
                  cover
                  :src="require(`@/assets/portfolio/Banners/${card.img}`)"
                  :alt="card.img"
                ></v-img>
                <v-card-title class="subtituloservicios mt-lg-5">
                  <b> {{ card.titulo }} </b>
                </v-card-title>
                <v-card-text class="textoservicios mt-lg-n10 ml-5 mr-5">
                  {{ card.texto }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="6"
              xl="6"
              class="mt-lg-n5 p-3 text-center"
            >
              <v-card
                class="mx-auto columnaservicios"
                v-for="card in servicios1"
                :key="card.title"
              >
                <v-img
                  class="imagen"
                  cover
                  :src="require(`@/assets/portfolio/Banners/${card.img}`)"
                  :alt="card.img"
                ></v-img>
                <v-card-title
                  class="subtituloservicios mt-lg-5"
                  style="align-items: center"
                >
                  <b> {{ card.titulo }} </b>
                </v-card-title>
                <v-card-text class="textoservicios mt-lg-n10 ml-5 mr-5">
                  {{ card.texto }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </div>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          titulo: "Marketing Digital",
          img: "marketing.png",
          texto:
            "Si deseas que tu negocio comience a generar ventas, podemos ayudarte utilizando las herramientas de publicidad en redes sociales, que te permiten crear anuncios efectivos para promocionar tu empresa.",
        },
      ],
      servicios1: [
        {
          titulo: "Desarrollo Web",
          img: "desarrollo.png",
          texto:
            "Es esencial que tu empresa cuente con un sitio web profesional, ya sea una página web, una landing page o una tienda en línea. Esto te permitirá mostrar tus productos, servicios y atraer clientes potenciales de manera efectiva.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cajaservicios {
  max-height: 100%;
}
.tituloservicios {
  font-size: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #e7ebf7;
}

.subtituloservicios {
  font-size: 25px;
  color: #07a5c3;
}

.textoservicios {
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
}

.columnaservicios {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 400px;
}

.columnaservicios:hover {
  transform: translateY(-10px);
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .tituloservicios {
    font-size: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #e7ebf7;
  }

  .subtituloservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #07a5c3;
  }

  .textoservicios {
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 200px;
  }

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 250px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
  .cajaservicios {
    max-height: 1250px;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .tituloservicios {
    font-size: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #e7ebf7;
  }

  .subtituloservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #07a5c3;
  }

  .textoservicios {
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 200px;
  }

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 425px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
  .cajaservicios {
    max-height: 1250px;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .textoservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
  .imagen {
    height: 300px;
  }
  .subtituloservicios {
    margin: 40px auto;
    width: max-content;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: monospace;
    font-size: 2rem;
    animation: efecto 3s steps(16), efecto1 1s step-end infinite alternate;
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

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 450px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
}

@media screen and (min-width: 769px) and (max-width: 960px) {
  .textoservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 300px;
    width: 100%;
  }

  .subtituloservicios {
    margin: 40px auto;
    width: max-content;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: monospace;
    font-size: 2rem;
    animation: efecto 3s steps(16), efecto1 1s step-end infinite alternate;
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

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 500px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
}
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .cajaservicios {
    height: 750px;
  }

  .textoservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 250px;
    width: 100%;
  }

  .subtituloservicios {
    margin: 40px auto;
    width: max-content;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: monospace;
    font-size: 2rem;
    animation: efecto 3s steps(16), efecto1 1s step-end infinite alternate;
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

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
}
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .cajaservicios {
    height: 750px;
  }

  .textoservicios {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 250px;
    width: 100%;
  }

  .subtituloservicios {
    margin: 40px auto;
    width: max-content;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: monospace;
    font-size: 2rem;
    animation: efecto 3s steps(16), efecto1 1s step-end infinite alternate;
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

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {

  .cajaservicios {
    height: 750px;
  }

  .textoservicios {
    font-size: 1.1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }

  .imagen {
    height: 250px;
    width: 100%;
  }

  .subtituloservicios {
    margin: 50px auto;
    width: max-content;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: monospace;
    font-size: 1.8rem;
    animation: efecto 3s steps(16), efecto1 1s step-end infinite alternate;
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

  .columnaservicios {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
  }

  .columnaservicios:hover {
    transform: translateY(-10px);
  }
}
</style>
