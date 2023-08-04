<template>
  <div
    src="../../assets/portfolio/img/Img2.jpg"
    class="cajaagregados text-center">
    <div>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" md="12" lg="12" class="text-center mt-sm-15">
            <h4 class="tituloagregados">
              <b> Valores Agregados </b>
            </h4>
          </v-col>
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="6"
              lg="6"
              xl="6"
              v-for="card in agregados"
              :key="card.title"
              class="mt-lg-n5 text-center p-lg-4"
            >
              <v-card class="mx-auto pricing-card">
                <v-card-title class="titulocard">
                  <b>{{ card.title }}</b>
                </v-card-title>
                <v-card-text class="descripcioncard ml-sm-5 mr-sm-5">{{
                  card.desc
                }}</v-card-text>
                <v-img
                  :src="require(`@/assets/portfolio/Banners/${card.img}`)"
                  :alt="card.img"
                  class="imagen-img"
                  cover
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "agregados",
  data() {
    return {
      agregados: [
        {
          title: "Seguridad y Garantías",
          img: "tecnología.png",
          desc: "Priorizamos calidad y satisfacción del cliente. Garantizamos excelencia en todos los proyectos.",
        },
        {
          title: "Asesorias de Dudas",
          img: "soporte.png",
          desc: "Destacamos por el excepcional soporte y acompañamiento a clientes. Resolvemos tus dudas con asistencia personalizada. Siempre disponibles para ti.",
        },
        {
          title: "Trabajo de Calidad",
          img: "calidad.png",
          desc: "Nuestro talentoso equipo de desarrolladores web y especialistas en marketing digital impulsa proyectos exitosos con soluciones innovadoras y estrategias efectivas para tu negocio.",
        },
        {
          title: "Cliente toma la palabra",
          img: "cliente.png",
          desc: "Nuestro enfoque está en el cliente. Escuchamos sus necesidades, creamos soluciones a medida y trabajamos juntos para hacer realidad su visión..",
        },
      ],
    };
  },
};
</script>

<style scoped>

.cajaagregados{
  font-family: "Inter", sans-serif;
}
/* .tituloagregados {
  font-size: 30px;
  color: #ffffff;
}

.titulocard {
  font-size: 20px;
  color: #07a5c3;
}

.pricing-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 400px;
  height: 350px;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.descripcioncard {
  font-size: 15px;
}

.imagen-img {
  width: 100%;
  max-height: 300px;
  background-position: center bottom;
} */

@media screen and (min-width: 321px) and (max-width: 480px) {
  .cajaagregados {
    height: auto;
    background: #07a5c3;
  }

  .tituloagregados {
    font-size: 2rem;
    color: #ffffff;
    margin-top: 25px;
  }

  .titulocard {
    font-size: 1.2rem;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 50px;
    transition: transform 0.3s ease;
    width: 280px;
    height: 350px;
    margin-top: 50px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    font-size: .9rem;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .cajaagregados {
    max-height: 100%;
  }

  .tituloagregados {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #ffffff;
  }

  .titulocard {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 350px;
    height: 350px;
    margin-top: 50px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .cajaagregados {
    height: auto;
  }

  .tituloagregados {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #ffffff;
  }

  .titulocard {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #07a5c3;
  }

  .descripcioncard {
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 270px;
    height: 350px;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 769px) and (max-width: 959px) {
  .cajaagregados {
    max-height: 100%;
  }

  .tituloagregados {
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #ffffff;
  }

  .titulocard {
    font-size: 17px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 350px;
    height: 350px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1023px) {
  .cajaagregados {
    height: auto;
  }

  .tituloagregados {
    font-size: 30px;
    font-family: monospace;
    color: #ffffff;
  }

  .titulocard {
    font-size: 17px;
    font-family: monospace;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
    height: 350px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    font-size: 14px;
    font-family: monospace;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .cajaagregados {
    height: auto;
  }

  .tituloagregados {
    font-size: 30px;
    font-family: monospace;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .titulocard {
    font-size: 17px;
    font-family: monospace;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
    height: 400px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    font-size: 20px;
    font-family: monospace;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .cajaagregados {
    height: auto;
    background: #07a5c3;
    border-radius:  0 0 150vh 150vh;
    padding: 20px; 
    display: flex;
    justify-content: space-around;
    font-family: "Inter", sans-serif;
  }

  .tituloagregados {
    font-size: 40px;
    color: #ffffff;
    margin-bottom: 50px;
  }

  .titulocard {
    font-size: 25px;
    color: #07a5c3;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 400px;
    height: 400px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .pricing-card:hover {
    transform: translateY(-5px);
  }

  .descripcioncard {
    margin-top: 10px;
    font-size: 15px;
  }

  .imagen-img {
    width: 100%;
    max-height: 300px;
  }
}
</style>
