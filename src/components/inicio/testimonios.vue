<template>
  <v-parallax
    src="../../assets/portfolio/images2/services-bg-3000.jpg"
    class="testimonial-component"
  >
    <v-row no-gutters>
      <v-container>
        <v-row class="mt-5" justify="center">
          <v-col cols="12" md="12" lg="6" class="">
            <div class="text-lg-left text-xs-center">
              <h4 class="section-title">
                <b> Testimonios </b>
              </h4>
              <h2 class="subsection-title" id="titulotestimonios">
                <b>
                  Algunos de nuestros clientes que han confiado en nosotros
                </b>
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="12" lg="6" xl="6">
            <v-carousel
              hide-delimiters
              :show-arrows="false"
              cycle
              :interval="3500"
              class="carrusel"
            >
              <v-carousel-item v-for="card in Testimonials" :key="card.name">
                <v-card class="card-shadow mt-lg-n5 mt-xs-n10 mx-auto">
                  <v-card-text class="pa-sm-10">
                    <div class="d-flex align-center mt-lg-5">
                      <v-row>
                        <v-col cols="2" md="2" lg="2">
                          <v-avatar class="avatar">
                            <v-img
                              :src="require(`@/assets/portfolio/fotoPersonas/${card.img}`)"
                              :alt="card.img"
                              class="imgagentest"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col cols="10" md="10" lg="10">
                          <h2 class="testimonios">
                            <p class="mb-lg-10 mb-xs-5">
                              “{{ card.testimonial }}”
                            </p>
                          </h2>
                          <div>
                            <h6 class="nombretest">
                              <b class="mt-lg-5"> {{ card.name }} </b>
                            </h6>
                            <div class="d-flex align-center testimonial-rating mt-lg-2">
                              <a
                                class="error--text"
                                v-for="star in card.stars"
                                :key="star"
                              >
                                <i class="mdi mdi-star"></i>
                              </a>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "testimonios",
  data() {
    return {
      Testimonials: [
        {
          img: "fotojuan.jpg",
          testimonial:
            "Recientemente descubrí a Target mientras buscaba empresas de publicidad para promocionar mi negocio. Estoy encantado con los resultados que han logrado hasta ahora. Recomiendo al 100% a Target por su profesionalismo y la calidad de sus servicios. ¡Son una excelente elección para impulsar tu negocio!",
          name: "Juan Tinjacá",
          stars: [1, 2, 3, 4, 5],
        },
        {
          img: "fotosamuel.jpg",
          testimonial:
            "En el mundo de la publicidad, hay muchas empresas, pero pocas ofrecen los beneficios que he encontrado en Target. Les pedí que crearan mi Landing Page y realmente superaron mis expectativas. Los recomiendo por su profesionalismo, calidad de servicio y compromiso con el éxito de sus clientes.",
          name: "Samuel Salinas",
          stars: [1, 2, 3, 4, 5],
        },
        {
          img: "fotocarlos.jpg",
          testimonial:
            "Como propietario de una red de negocios, me encontré en la necesidad de mostrarlos de manera efectiva, pero admito que al principio no lo hacía bien. Sin embargo, desde que me asocié con Target, mi experiencia ha sido excelente. No solo me ofrecieron un descuento increíble, muy recomendados!",
          name: "Carlos Martínez",
          stars: [1, 2, 3, 4, 5],
        },
      ],
    };
  },
};
</script>

<style scoped>

.section-title {
  font-size: 15px;
  font-family: monospace;
  color: #ffff;
}
.subsection-title {
  font-size: 30px;
  font-family: monospace;
  color: #ffff;
}
.testimonios {
  font-size: 15px;
  font-family: monospace;
  color: #000000;
}
.nombretest {
  font-size: 15px;
  font-family: monospace;
  color: #000000;
}

.testimonial-rating {
  color: #f1c40f;
  font-size: 20px;
}

.card-shadow {
  box-shadow: 0px 2px 15px rgba(2, 2, 2, 0.1);
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .testimonial-component {
    max-height: 500px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 12px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 10px;
  }

  .imgagentest {
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .avatar {
    width: 200px;
    height: 200px;
  }

  .carrusel{
    box-shadow: 0px 15px 15px rgba(2, 2, 2, 0.1);
    border-radius: 15px; 
    max-height: auto;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .testimonial-component {
    max-height: 500px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 10px;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card-shadow {
    box-shadow: 0px 2px 150px rgba(2, 2, 2, 0.1);
    max-height: 100%;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .testimonial-component {
    height: 500px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 10px;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .carrusel{
    box-shadow: 0px 15px 15px rgba(2, 2, 2, 0.1);
    border-radius: 15px; 
    height: auto;
  }
}
@media screen and (min-width: 769px) and (max-width: 959px) {
  .testimonial-component {
    max-height: 450px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 10px;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card-shadow {
    box-shadow: 0px 2px 15px rgba(2, 2, 2, 0.1);
    max-height: 100%;
  }
}

@media screen and (min-width: 960px) and (max-width: 1022px) {
  .testimonial-component {
    max-height: 450px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 1em;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card-shadow {
    box-shadow: 0px 2px 15px rgba(2, 2, 2, 0.1);
    max-height: 100%;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1199px) {
  .testimonial-component {
    max-height: 450px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 1em;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card-shadow {
    box-shadow: 0px 2px 15px rgba(2, 2, 2, 0.1);
    max-height: 100%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .testimonial-component {
    height: 400px;
  }

  .section-title {
    font-size: 15px;
    font-family: monospace;
    color: #ffff;
  }
  .subsection-title {
    font-size: 30px;
    font-family: monospace;
    color: #ffff;
  }
  .testimonios {
    font-size: 15px;
    font-family: monospace;
    color: #000000;
    margin-bottom: 10px;
  }
  .nombretest {
    font-size: 20px;
    font-family: monospace;
    color: #000000;
  }

  .testimonial-rating {
    color: #f1c40f;
    font-size: 15px;
  }
  .imgagentest {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .carrusel{
    box-shadow: 0px 15px 15px rgba(2, 2, 2, 0.1);
    border-radius: 15px; 
    max-height: auto;
  }
}
</style>
