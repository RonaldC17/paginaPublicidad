<template>
  <div class="bg-primary py-6">
    <v-container>
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="12" md="12" lg="6" xl="6" class="text-center">
          <h2 class="c2a-title" id="información">
            No dudes en impulsar tu negocio, el éxito te espera
          </h2>
        </v-col>
        <v-col cols="12" md="12" lg="6" xl="6" class="text-center">
          <div class="ml-auto">
            <v-btn
              to="/"
              variant="outlined"
              color="white"
              class=""
              id="botoninformacion">
              Quiero Impulsar mi negocio
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "c2a3",
};
</script>

<style>
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
</style>
