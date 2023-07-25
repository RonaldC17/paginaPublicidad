<template>
  <div class="contenedortitulo p-5">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="6" lg="6">
          <div class="text-center mt-10">
            <h2 class="tituloport">
              <b>
                NUESTRA AGENCIA SIEMPRE LE GUSTA TRABAJAR CON LAS MEJORES
                EMPRESAS DE COLOMBIA
              </b>
            </h2>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <div class="text-center">
            <v-img
              src="../../../assets/portfolio/Banners/bannergris.jpg"
              class="fototrabajos"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script></script>

<style>
.contenedortitulo {
  background: #303c36;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tituloport {
  animation: fadeIn 1s ease-in-out;
  font-size: 25px;
  font-family: monospace;
  color: #ffffff;
}

.tituloport {
  animation: tituloport 2.5s linear both;
}
@keyframes tituloport {
  0% {
    letter-spacing: -0.2em;
    transform: translateZ(-700px) translateY(-100px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}

.fototrabajos {
  width: 100%;
  height: 200px;
}
</style>
