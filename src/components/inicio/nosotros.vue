<template>
  <div class="cajanosotros">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="6" lg="6" class="d-flex">
          <v-img
            src="../../assets/portfolio/variadas/img1.jpg"
            class="fotonosotros"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="6"
          class="d-flex"
          style="align-items: center"
        >
          <div class="text-center">
            <div class="mt-lg-n15 mt-xs-n10">
              <h4 class="sobrenosotros-title">Sobre nuestro Trabajo</h4>
            </div>
            <div class="mt-lg-10 mt-xs-n10 mb-sm-n10">
              <h6 class="sobrenosotros-description">
                Somos una agencia publicitaria dedicada a promocionar su negocio de manera efectiva. Nuestro enfoque principal es brindar servicios de alta calidad, accesibles y adaptados a las necesidades de nuestros clientes. Valoramos la opinión de nuestros clientes y nos esforzamos por satisfacer sus expectativas. En nuestra agencia, creemos en el lema "Siempre escuchamos a nuestros clientes" para asegurarnos de ofrecer soluciones publicitarias que se ajusten a sus requerimientos. Estamos comprometidos en brindar un servicio excepcional y resultados exitosos para impulsar el crecimiento de su negocio.
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Nosotros",
  methods: {
    handleReset() {},
  },
};
</script>

<style>
.cajanosotros {
  background: #dfe3e4;
  
}

.sobrenosotros-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
}

.sobrenosotros-description {
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
}

/* Pantallas Menores a 320px */
@media screen and (max-width: 320px) {
  .sobrenosotros {
    width: 10px;
    height: 10px;
  }
  .sobrenosotros-title {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
  .sobrenosotros-description {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
}

/* Pantallas entre 321 y 480px */
@media screen and (min-width: 321px) and (max-width: 480px) {
  .sobrenosotros {
    width: 100px;
    height: 100px;
  }
  .sobrenosotros-title {
    font-size: 4vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 3vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }
}

/* Pantallas de 481 a 599px */
@media screen and (min-width: 481px) and (max-width: 599px) {
  .sobrenosotros-title {
    font-size: 5vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 3.1vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }
}

/* Pantallas de 600px a 768px */
@media screen and (min-width: 600px) and (max-width: 768px) {
  .sobrenosotros-title {
    font-size: 4vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-bottom: 50px;
  }
  .sobrenosotros-description {
    font-size: 2.5vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
  .cajanosotros {
    max-height: 100%;
  }
}

@media screen and (min-width: 769px) and (max-width: 958px) {
  
  .sobrenosotros-title {
    font-size: 2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    
  }
  .sobrenosotros-description {
    font-size: 1.1em;
    font-family: monospace;
    color: #000000;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 50px;

  }

}

/* Pantallas de 961 a 1023px */
@media screen and (min-width: 959px) and (max-width: 1023px) {
  .sobrenosotros-title {
    font-size: 2em;
    font-family: monospace;
    color: #000000;
  }
  .sobrenosotros-description {
    font-size: 1.1em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 80px;
  }
}

/* Pantallas de 1024 a 1199px */
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .sobrenosotros-title {
    font-size: 3vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-bottom: 50px;
  }
  .sobrenosotros-description {
    font-size: 2.5vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 30px;
    margin-bottom: 80px;
  }
  .cajanosotros {
    max-height: 100%;
  }
}

/* Pantallas de 1200px a 1368px*/
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .sobrenosotros-title {
    font-size: 2vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    
    margin-top: 100px;
  }
  .sobrenosotros-description {
    font-size: 1.5vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .cajanosotros {
    max-height: 100%;
  }
}

@media screen and (min-width: 1441px) and (max-width: 2560px) {
  .sobrenosotros {
    width: 300px;
    height: 300px;
  }
  .sobrenosotros-title {
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
  .sobrenosotros-description {
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
}
</style>
