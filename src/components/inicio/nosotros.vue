<template>
  <div class="cajanosotros">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="12" lg="6" class="">
          <v-img
            src="../../assets/portfolio/variadas/nosotros1.png"
            class="fotonosotros"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="6"
          class="d-flex"
          style="align-items: center"
        >
          <div class="text-center">
            <div class="mt-lg-n15 mt-xs-n10">
              <h4 class="sobrenosotros-title">Sobre nuestro Trabajo</h4>
            </div>
            <div class="mt-lg-10 mt-xs-n10 mb-sm-n10">
              <h5 class="sobrenosotros-description">
                Somos una agencia publicitaria comprometida con promocionar su negocio de manera efectiva. Ofrecemos servicios de alta calidad y personalizados, adaptados a las necesidades de nuestros clientes. Valoramos sus opiniones y buscamos superar sus expectativas. Nuestro lema es "Siempre escuchamos a nuestros clientes", para ofrecer soluciones publicitarias precisas y exitosas. Trabajamos para impulsar el crecimiento de su negocio con resultados excepcionales.
              </h5>
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

<style scoped>
.cajanosotros {
  background: #303c36;
  
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

.cajanosotros{
  height: auto;
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
  .sobrenosotros-title {
    font-size: 1.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 1rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }

  .fotonosotros{
    width: 100%;
    height: 100px;
  }
}

/* Pantallas de 481 a 599px */
@media screen and (min-width: 481px) and (max-width: 599px) {
  .sobrenosotros-title {
    font-size: 1.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 1rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }
  .fotonosotros{
    width: 100%;
    height: 150px;
  }
}

/* Pantallas de 600px a 768px */
@media screen and (min-width: 600px) and (max-width: 768px) {
  .sobrenosotros-title {
    font-size: 1.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 1rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }
  .cajanosotros {
    height: 480px;
  }
  .fotonosotros{
    width: 100%;
    height: 200px;
  }
}

@media screen and (min-width: 769px) and (max-width: 959px) {
  .sobrenosotros-title {
    font-size: 1.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 1rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 20px;
  }
  .cajanosotros {
    height: 500px;
  }
  .fotonosotros{
    width: 100%;
    height: 250px;
  }
}

/* Pantallas de 959 a 1023px */
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .sobrenosotros-title {
    font-size: 2rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 1.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
  }
  .cajanosotros {
    height: 650px;
  }
  .fotonosotros{
    width: 100%;
    height: 250px;
  }
}

/* Pantallas de 1024 a 1199px */
@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .sobrenosotros-title {
    font-size: 2.5rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 10px;
  }
  .sobrenosotros-description {
    font-size: 2rem;
    font-family: monospace;
    color: #ffffff;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
  }
  .cajanosotros {
    height: 900px;
  }
  .fotonosotros{
    width: 100%;
    height: 300px;
  }
}

/* Pantallas de 1280 a 1440px*/
@media screen and (min-width: 1280px) and (max-width: 1440px) {
  .sobrenosotros-title {
    font-size: 2vw;
    font-family: monospace;
    color: #ffffff;
    margin-top: 15%;
  }
  .sobrenosotros-description {
    font-size: 1.3vw;
    font-family: monospace;
    color: #ffffff;
    margin-top: 40px;
    margin-bottom: 100px;
  }
  .cajanosotros {
    max-height: 100%;
  }
  .fotonosotros{
    width: 100%;
    height: 300px;
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
