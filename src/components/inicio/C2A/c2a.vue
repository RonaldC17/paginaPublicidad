<template>
  <div>
    <div class="C2A py-3">
      <v-container>
        <v-row class="p-2" no-gutters>
          <v-col cols="12" md="4" class="pt-5 pb-5 ml-n10">
            <v-btn
              to=""
              variant="outlined"
              color="white"
              block
              id="botoninformacion">
              Solicitar Presupuesto
            </v-btn>
          </v-col>
          <v-col cols="12" md="8" class="text-right">
            <h3
              class="c2a-title text-white pt-5 pb-5 pl-16 pr-16"
              id="información"
            >
              ¿Está satisfecho con lo que le ofrecemos? Solicite presupuesto
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "c2a",
};
</script>

<style scoped>
#información {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
}

#botoninformacion {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
}

.C2A {
  background: #07a5c3;
}

@media screen and (max-width: 480px) {
  #información {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #botoninformacion {
    font-size: 12px;
  }
}

@media screen and (min-width: 1441px) {
  #información {
    font-size: 25px;
  }

  #botoninformacion {
    font-size: 15px;
  }
}
</style>
