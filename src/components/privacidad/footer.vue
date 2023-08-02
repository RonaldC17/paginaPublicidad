<template>
  <v-footer class="footer px-4">
    <v-container>
      <v-row class="py-6 py-sm-7">
        <v-col
          cols="12"
          md="4"
          lg="4"
          class="px-xs-0"
          justify="center"
          align="center"
        >
          <v-img
            src="../../assets/portfolio/Logos/TARGET-PUBLICITY-SF.png"
            class="imagenfooter mt-lg-n10"
          ></v-img>
        </v-col>
        <v-col
          class="px-xs-0 terminosypolitica"
          cols="12"
          md="4"
          lg="4"
          xl="6"
          justify="center"
          align="center">
          <h2 class="lostitulos"><b> Avisos Legales </b></h2>
          <div class="mt-lg-5 mt-md-3">
            <router-link to="/terminosycondiciones" class="link px-sm-4 ps-0"> Términos y Condiciones </router-link>
            <br />
            <router-link to="/politicadeprivacidad" class="link px-sm-4 ps-0"> Política de Privacidad </router-link>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="4"
          class="px-xs-0"
          justify="center"
          align="center"
        >
          <h2 class="lostitulos"><b>Redes Sociales</b></h2>
          <div class="social-icons mt-lg-5 mt-md-3">
            <ul>
              <a href="#">
                <i class="mdi mdi-facebook m-3"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-twitter m-3"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-youtube m-3"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-instagram m-3"></i>
              </a>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="footer-bottom-bar">
        <v-col
          class="ml-auto"
          cols="12"
          md="12"
          lg="12"
          xl="12"
          justify="center"
          align="center"
        >
          <h3>
            © <strong>{{ new Date().getFullYear() }}</strong> Desarrollado por<router-link
              to="/politicadeprivacidad"
              class="link px-sm-4"
              >Target Publicity</router-link>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #a6a6a6;
}

.imagenfooter {
  height: 150px;
}
.social-icons ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}

.social-icons a {
  color: #000000;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ffff;
}

.footer-bottom-bar {
  padding: 10px;
  font-size: 2vh;
}

.link {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link:hover {
  color: #ffff;
}

.lostitulos {
  font-size: 25px;
}

</style>
