<template>
    <div class="contadorcaja" :class="{ 'hovered': hoverContainer }">
      <div class="text-center">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" lg="4" xl="4" class="columna" @mouseover="hoverContainer = true" @mouseout="hoverContainer = false">
              <span class="counter-number">+{{ customerCount }}</span>
              <br>
              <span class="counter-label">Clientes satisfechos</span>
            </v-col>
            <v-col cols="12" md="4" lg="4" xl="4" class="columna" @mouseover="hoverContainer = true" @mouseout="hoverContainer = false">
              <span class="counter-number">+{{ jobCount }}</span>
              <br>
              <span class="counter-label">Impresiones Generadas</span>
            </v-col>
            <v-col cols="12" md="4" lg="4" xl="4" class="columna" @mouseover="hoverContainer = true" @mouseout="hoverContainer = false">
              <span class="counter-number">+{{ companyCount }}</span>
              <br>
              <span class="counter-label">Campañas Creadas</span>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      customerCount: 0,
      jobCount: 0,
      companyCount: 0,
      totalCount: 0,
      hoverContainer: false
    };
  },
  mounted() {
    this.startCounters();
  },
  methods: {
    startCounters() {
      const interval = setInterval(() => {
        if (this.totalCount >= 300000) {
          clearInterval(interval);
          return;
        }

        this.customerCount += 1;
        this.jobCount += 1000;
        this.companyCount += 8;
        this.totalCount += 1000;

        if (this.customerCount >= 250) {
          this.customerCount = 250;
        }

        if (this.jobCount >= 300000) {
          this.jobCount = 300000;
        }

        if (this.companyCount >= 2000) {
          this.companyCount = 2000;
        }
      }, 1);
    }
  }
};
</script>
  
  
  <style>
  .counter-column {
    margin: 0 10px;
    text-align: center;
  }
  
  .counter-number {
    font-size: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: azure;
    transition: 0.5s;
  }
  
  .counter-number:hover {
    transform: scale(1.2);
  }
  
  .counter-label {
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: azure;
  }
  
  .contadorcaja {
    background: #303c36;
    transition: 0.5s;
  }
  
  .contadorcaja.hovered {
    background: #455A64;
  }
  
  </style>
  