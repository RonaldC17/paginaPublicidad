<template>
  <div>
    <div class="C2A1 py-6">
      <v-container>
        <v-row class="text-xs-center" no-gutters>
          <v-col cols="12" md="12" lg="6">
            <div class="ml-5 mr-5 mt-xs-5">
              <v-btn
                href="https://wa.link/6zajnu"
                variant="outlined"
                color="white"
                id="botoninformacion"
              >
                Quiero Impulsar mi negocio
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="12" lg="6">
            <h2 class="c2a-title text-white" id="información">
              No dudes en impulsar tu negocio, el éxito te espera
            </h2>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "c2a1",
};
</script>

<style scoped>
#información {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
}

#botoninformacion {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  cursor: pointer;
}
#botoninformacion:hover {
  text-decoration: none;
}

.C2A1 {
  background: #303c36;
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  #información {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #botoninformacion {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px;
    cursor: pointer;
  }
  #botoninformacion:hover {
    text-decoration: none;
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  #información {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  #botoninformacion {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    cursor: pointer;
  }
  #botoninformacion:hover {
    text-decoration: none;
  }
}

@media screen and (min-width: 1441px) {
  #información {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
  }

  #botoninformacion {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    cursor: pointer;
  }
  #botoninformacion:hover {
    text-decoration: none;
  }
}
</style>
