<template>
    <div >
        <div class="C2A2 py-6">
            <v-container>
                <v-row class="align-center" no-gutters>
                    <v-col cols="12" md="12" lg="12" xl="12" class="text-center">
                        <h2 class="tituloc2a2" id="información">
                           Si te Interesa alguno de nuestros planes, no dudes en contactarnos!
                        </h2>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" xl="12" class="text-center">
                        <div class="ml-5 mr-5  p-2">
                            <v-btn
                                href="https://wa.link/6zajnu"
                                variant="outlined"
                                class="botonc2a2"
                                id="botoninformacion">
                                Conocer Más
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

    #información{

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 25px;

    }

    #botoninformacion{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15px;
        cursor: pointer;
    }
    #botoninformacion:hover{
        text-decoration: none;
    }

    .C2A2{
        background: #fafafa;
    }

    .tituloc2a2{
        color: black;
    }

    .botonc2a2{
        color: black;
    }

@media screen and  (min-width: 321px) and (max-width: 480px) {

    #información{

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    }

    #botoninformacion{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px;
    cursor: pointer;
    }
    #botoninformacion:hover{
    text-decoration: none;
    }

}


@media screen and (min-width: 1441px) {
    
    #información{

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;

    }

    #botoninformacion{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    cursor: pointer;
    }
    #botoninformacion:hover{
    text-decoration: none;
    }
}

</style>