<template>
    <div class="contenedortitulo p-5">
        <div class="">
            <v-container>
                <v-row justify="center" no-gutters>
                    <v-col cols="12" sm="10" md="9" lg="7">
                    <div class="text-center">
                        <h2 class="tituloport">
                        <b>
                            NUESTRA AGENCIA SIEMPRE LE GUSTA TRABAJAR CON LAS MEJORES EMPRESAS DE COLOMBIA
                        </b> 
                        </h2>
                    </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>


<script>
</script>

<style>
.contenedortitulo{
    background: #CFD8DC;
}

/* @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tituloport{
    animation: fadeIn 1s ease-in-out;
    font-size: 25px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
} */

.tituloport{
    animation:tituloport 0.4s linear both
} 
@keyframes tituloport{
    0%{
        letter-spacing:-.2em;transform:translateZ(-700px) translateY(-100px);opacity:0
    }
    40%{opacity:.6}100%{   
        transform:translateZ(0) translateY(0);opacity:1
    }
}


</style>