<template>
  <div class="containerplanes">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col
          cols="12"
          sm="10"
          md="9"
          lg="7"
          class="text-center tituloplanes mt-lg-10"
        >
          <h2>
            <b> Planes </b>
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters class="mt-lg-15">
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="(card, index) in pricePlan"
          :key="index"
        >
          <v-card
            outlineds
            class="pricing-card overflow-hidden ml-5 mr-5 mt-xs-n5"
          >
            <div class="text-center pa-lg-6 mt-5" id="title">
              <v-col
                cols="12"
                md="12"
                sm="12"
                class="titulos mb-5"
                align="center"
              >
                <h5>
                  <b> Marketing Digital </b>
                </h5>
              </v-col>
              <v-img
                class="img-planes"
                cover
                :src="require(`@/assets/portfolio/variadas/${card.img}`)"
                :alt="card.img"
                style="margin-left: auto; margin-right: auto"
              ></v-img>
              <h3 class="titulocardplanes">
                <b> {{ card.title }} </b>
              </h3>
              <div class="mt-5">
                <sup class="text-muted">$</sup>
                <span class="precio">{{ card.price }}</span>
              </div>
              <div class="mt-1">
                <span class="plan">{{ card.plan }}</span>
              </div>
              <br>
              <hr
                class="mx-xs-auto ml-lg-15 mr-lg-15 ml-xs-1 mr-xs-1 divisor"
              />
              <p class="mt-5 descripcionmd">{{ card.desc }}</p>
              <p class="mt-5 descripcionmd">{{ card.desc1 }}</p>
              <p class="mt-5 descripcionmd">{{ card.desc2 }}</p>
              <p class="mt-5 descripcionmd">{{ card.desc3 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc4 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc5 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc6 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc7 }}</p>
            </div>
            <hr class="ml-lg-15 mr-lg-15 divisor" />
            <div class="text-center mt-lg-10">
              <v-btn class="boton mx-auto" @click="openWhatsApp(card.title)">
                <p>Escoger Plan</p>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />
      <v-row class="mt-lg-7" justify="center" no-gutters>
        <v-col
          cols="12"
          md="4"
          sm="6"
          lg="4"
          xl="4"
          v-for="(card, index) in pricePlan1"
          :key="index"
        >
          <v-card outlineds class="pricing-card ml-5 mr-5 mt-5">
            <div class="text-center pa-lg-6" id="title">
              <v-col
                cols="12"
                md="12"
                sm="12"
                class="titulos mb-5"
                align="center"
              >
                <h5>
                  <b> Desarrollo Web</b>
                </h5>
              </v-col>
              <v-img
                class="img-planes"
                cover
                :src="require(`@/assets/portfolio/variadas/${card.img}`)"
                :alt="card.img"
                style="margin-left: auto; margin-right: auto"
              ></v-img>
              <h3 class="titulocardplanes">
                <b> {{ card.title }} </b>
              </h3>
              <div class="mt-5">
                <sup class="text-muted">$</sup>
                <p class="precio">{{ card.price }}</p>
              </div>
              <hr class="ml-lg-15 mr-lg-15 divisor" />
              <p class="mt-5 descripciondw">{{ card.desc }}</p>
              <p class="mt-5 descripciondw">{{ card.desc1 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc2 }}</p>
              <p class="mt-5 descripciondw">{{ card.desc3 }}</p>
            </div>
            <hr class="ml-lg-15 mr-lg-15 divisor" />
            <div class="text-center mt-lg-5">
              <v-btn class="boton mx-auto" @click="openWhatsApp(card.title)">
                <p>Escoger Plan</p>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricePlan: [
        {
          img: "cm.png",
          title: "Comunity Manager",
          price: "500.000",
          desc: "Comunicación activa con la comunidad.",
          desc1: "Gestión de Redes Sociales",
          desc2: "Edición de videos (2).",
          desc3: "Diseño de post publicitarios (15) para Instagram y facebook.",
          desc4: "Diseño formato Historias (5).",
          desc5: "Manejo de hashtag.",
        },
        {
          img: "google.png",
          title: "Google ADS",
          price: "500.000",
          plan: "Inversión pauta semanal desde: $ 200.000",
          desc: "Investigación de la buyer persona.",
          desc1:
            "Analisis y selección de palabras clave para campaña de busqueda.",
          desc2: "Campaña de Red de búsqueda.",
          desc3:
            "Integración Google Tag Manager para seguimiento de conversiones y visitas.",
          desc4: "Integración de google Analytics.",
        },
        {
          img: "media.png",
          title: "Social Media ADS",
          price: "500.000",
          plan: "Inversión pauta semanal desde: $ 120.000",
          desc: "Objetivo de campaña según en el requerimiento de la empresa.",
          desc1: "Escalamiento de campañas.",
          desc2: "Diseño de post publicitarios.",
          desc3: "Campaña en Instagram, Facebook.",
          desc4: "Campaña de retargeting.",
          desc5: "Integración pixel de facebook.",
          desc6: "Creación de cuentas como perfiles comerciales.",
          desc7: "Informes de rendimiento.",
        },
      ],
      pricePlan1: [
        {
          img: "fotopc1.png",
          title: "Landing Page",
          price: "500.000",
          desc: "Crea una página web cautivadora para atraer a tus clientes de manera efectiva.",
          desc1:
            "Realizamos un seguimiento constante para asegurar el máximo rendimiento de tu Landing Page",
          desc2:
            "Incluye hosting y dominio configurado (cubierto por la empresa dueña).",
          desc3:
            "Entregamos una página web completa, junto con copias de seguridad y documentación detallada.",
        },
        {
          img: "fotomorada2.png",
          title: "Página Profesional",
          price: "500.000",

          desc: "Destaca tu negocio con una página web profesional para mostrar a tus clientes",
          desc1:
            "Realizamos un seguimiento constante para asegurar el máximo rendimiento de tu página web profesional",
          desc2:
            "Incluye hosting y dominio configurado (cubierto por la empresa dueña).",
          desc3:
            "Entregamos una página web completa, junto con copias de seguridad y documentación detallada.",
        },
        {
          img: "carromorado.png",
          title: "Tienda Online",
          price: "800.000",
          desc: "Impulsa las ventas de tus productos con una página web personalizada.",
          desc1:
            "Realizamos un seguimiento constante para asegurar el máximo rendimiento de tu tienda online",
          desc2:
            "Incluye hosting y dominio configurado (cubierto por la empresa dueña).",
          desc3:
            "Te proporcionamos una página completa, junto con copias de seguridad y documentación detallada.",
        },
      ],
    };
  },
  methods: {
    openWhatsApp(title) {
      const baseWhatsappLink =
        "https://api.whatsapp.com/send?phone=+573238146440&text=";
      const whatsappMessage = encodeURIComponent(
        `¡Hola! Estoy interesado en el plan ${title} que ofrecen.`
      );
      const link = `${baseWhatsappLink}${whatsappMessage}`;
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap");
.containerplanes {
  background: #dfe3e4;
  background-size: cover;
  background-repeat: no-repeat;
}
.tituloplanes h2 {
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
}

.titulos {
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* .pricing-card {
  background: #ffffff;
  border-radius: 15px;
  transition: all 0.8s ease;
  height: 600px;
} */

.pricing-card:hover {
  transform: translateY(-10px);
  background: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px 15px rgba(79, 61, 245, 0.2);
}

.precio {
  font-family: "Lato Black", sans-serif;
  font-weight: bold;
}

.boton p {
  font-size: 15px;
  color: #eceff1;
}

.boton {
  border-radius: 50px;
  background-color: #2c015a;
  transition: all 0.8s ease;
}

.boton:hover {
  background-color: #000000;
  transition: all 0.3s ease;
}

.img-planes {
  width: 60px;
  height: 60px;
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .titulos {
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 50px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 13px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .descripcionmd {
    font-size: 13px;
    margin-left: 50px;
    margin-right: 50px;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 481px) and (max-width: 599px) {
  .titulos {
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 90px;
    margin-right: 90px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 50px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 15px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .descripcionmd {
    font-size: 15px;
    margin-left: 50px;
    margin-right: 50px;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 600px) and (max-width: 767px) {
  .titulos {
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 25px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 13px;
    margin-left: 40px;
    margin-right: 40px;
  }

  .descripcionmd {
    font-size: 13px;
    margin-left: 40px;
    margin-right: 40px;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 768px) and (max-width: 959px) {
  .titulos {
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 75px;
    margin-right: 75px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 25px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 17px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .descripcionmd {
    font-size: 17px;
    margin-left: 50px;
    margin-right: 50px;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 20px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .titulos {
    font-size: 0.9em;
    font-family: monospace;
    font-weight: bold;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 90px;
    margin-right: 90px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 25px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .descripcionmd {
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }

  .titulocardplanes {
    font-size: 1.5em;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .titulos {
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
    margin-top: 25px;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .descripciondw {
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .descripcionmd {
    font-size: 20px;
    margin-left: 15%;
    margin-right: 15%;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 50px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .titulos {
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .divisor {
    background-color: #2c015a;
    margin-left: 50px;
    margin-right: 50px;
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.1);
    transition: all 0.8s ease;
    height: auto;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .precio {
    font-family: "Lato Black", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }

  .descripciondw {
    font-size: 1.2rem;
    margin-left: 5%;
    margin-right: 5%;
  }

  .descripcionmd {
    font-size: 1.2rem;
    margin-left: 10%;
    margin-right: 10%;
  }

  #title h3 {
    font-size: 20px;
  }

  .boton p {
    font-size: 15px;
    color: #eceff1;
  }

  .boton {
    border-radius: 50px;
    background-color: #2c015a;
    transition: all 0.8s ease;
    margin-top: 40px;
  }

  .boton:hover {
    background-color: #000000;
    transition: all 0.3s ease;
  }

  .img-planes {
    width: 60px;
    height: 60px;
  }

  .tituloplanes {
    margin-bottom: 50px;
  }
}
</style>
