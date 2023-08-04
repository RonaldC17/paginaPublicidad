<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex child-flex" cols="6">
          <a href="https://dripgang.shop" target="_blank">
            <v-img
              class="portafoliodesarrollo"
              cover
              src="../../../assets/portfolio/variadas/drip1.png"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </a>
        </v-col>
        <v-col class="d-flex child-flex" cols="6">
          <a href="https://dev-sinnergy12.pantheonsite.io" target="_blank">
            <v-img
              class="portafoliodesarrollo1"
              cover
              src="../../../assets/portfolio/variadas/sinnergynueva.png"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </a>
        </v-col>
        <!-- <v-col
          class="d-flex child-flex"
          cols="4">
          <v-img
            class="imagen2"
            cover
            src="../../../assets/portfolio/variadas/nosotros1.png">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<script></script>

<style>
.portafoliodesarrollo {
  margin: 0 auto;
  margin-top: 50px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.portafoliodesarrollo:hover::after {
  transform: translateY(0);
}

.portafoliodesarrollo::after {
  content: "Drip Gang";
  font-size: 2rem;
  color: #ffffff;
  background-color: #16456198;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.portafoliodesarrollo1 {
  margin: 0 auto;
  margin-top: 50px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.portafoliodesarrollo1:hover::after {
  transform: translateY(0);
}

.portafoliodesarrollo1::after {
  content: "Sinnergy12";
  font-size: 2rem;
  color: #ffffff;
  background-color: #16456198;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.portafoliodesarrollo2 {
  margin: 0 auto;
  margin-top: 50px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.portafoliodesarrollo2:hover::after {
  transform: translateY(0);
}

.portafoliodesarrollo2::after {
  content: "Desarrollo Web";
  font-size: 2rem;
  color: #ffffff;
  background-color: #16456198;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transform: translateY(100%);
  transition: transform 0.3s;
}
</style>
