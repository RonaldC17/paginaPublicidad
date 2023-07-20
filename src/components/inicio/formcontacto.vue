<template>
  <div class="cajaformulario">
    <v-container>
      <v-row no-gutters class="mt-lg-5">
        <v-col cols="12" lg="12" md="12" xl="12" class="text-center">
          <div class="tituloformulario">
            <h2>Pregunta tu Plan</h2>
          </div>
        </v-col>
      </v-row>
      <v-form @submit.prevent="submit">
        <v-row class="mb-lg-n5">
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="ml-lg-n10">
              <v-text-field
                v-model="name.value.value"
                :counter="25"
                :error-messages="name.errorMessage.value"
                label="Nombre"
                prepend-inner-icon="mdi mdi-account-edit"
                variant="solo"
                class="custom-text-field ml-lg-n16"   
                placeholder="Ejemplo: Carmelo Andrés" 
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="mr-lg-n10">
              <v-text-field
                v-model="lastname.value.value"
                :counter="20"
                :error-messages="lastname.errorMessage.value"
                label="Apellidos"
                variant="solo"
                class="mr-lg-n16 custom-text-field"
                prepend-inner-icon="mdi mdi-rename"
                placeholder="Ejemplo: Robles Hurtado"
                ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-lg-n6">
          <v-col cols="12" md="6" lg="6" xl="6">
            <div class="ml-lg-n10">
              <v-text-field
                v-model="phone.value.value"
                :counter="10"
                :error-messages="phone.errorMessage.value"
                label="Número de Celular"
                class="ml-lg-n16 custom-text-field"
                variant="solo"
                prepend-inner-icon="mdi mdi-cellphone-check"
                placeholder="Ejemplo: 311 5558833"
                
              ></v-text-field>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="6" xl="6">
            <div class="mr-lg-n10">
              <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="Correo Electrónico"
                variant="solo"
                class="mr-lg-n16 custom-text-field"
                prepend-inner-icon="mdi mdi-at"
                placeholder="Ejemplo: usuario@dominio.com"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <div class="ml-lg-n10 mr-lg-n10">
          <v-select
            v-model="select.value.value"
            :items="items"
            :error-messages="select.errorMessage.value"
            label="Planes"
            variant="solo"
            class="ml-lg-n16 mr-lg-n16"
          ></v-select>
        </div>
        <div class="ml-lg-n10">
          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            value="1"
            label="Acepta los Términos y Condiciones"
            type="checkbox"
            variant="solo"
            class="ml-lg-n16 mr-lg-n10"
            required
          ></v-checkbox>
        </div>
        <v-row justify="center" align="center">
          <v-btn type="submit" id="btn">Enviar</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2 && value?.length <= 25) return true;

      return "El nombre debe tener al menos 2 caracteres.";
    },
    lastname(value) {
      if (value?.length >= 2) return true;

      return "El Apellido debe tener al menos 2 caracteres.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "El número de teléfono debe tener al menos 9 dígitos.";
    },
    email(value) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value))
        return true;

      return "Debe ser un correo electrónico válido.";
    },
    select(value) {
      if (value) return true;

      return "Debes seleccionar un Ítem.";
    },

    checkbox(value) {
      if (value === "1") return true;

      return "Debes Aceptar los Términos y Condiciones";
    },
  },
});

const name = useField("name");
const lastname = useField("lastname");
const phone = useField("phone");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");

const items = ref([
  "Instagram & Facebook",
  "Google Ads",
  "TikTok Ads",
  "Landing Page",
  "Página Web Profesional",
  "E-Commerce",
]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
.cajaformulario {
  background: #d9d9d9;
}

.tituloformulario {
  font-size: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #607d8b;
  transform: translateY(50px);
}

#btn {
  background: black;
  cursor: pointer;
  border: none;
  padding: 10px 10px;
  color: #ffebee;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  border-radius: 50px;
  display: flex;
}

#btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    red,
    blue,
    pink,
    yellow,
    red,
    blue,
    pink,
    yellow
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  animation: glowing 20s linear infinite;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

form {
  max-width: 500px;
  margin: 40px auto;
}
.custom-text-field{
  border-radius: 50px;
}


@media screen and (min-width: 0px) and (max-width: 320px) {
  .cajaformulario {
    background: #bdbdbd;
  }

  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
  }

  #enviar {
    background: black;
    cursor: pointer;
    border: none;
    padding: 16px 16px;
    color: #ffebee;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    border-radius: 12px;
    display: flex;
  }
  #enviar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  #limpiar {
    background: black;
    cursor: pointer;
    border: none;
    padding: 16px 16px;
    color: #ffebee;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    border-radius: 12px;
    display: flex;
  }
  #limpiar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  #contactos {
    width: 50%;
    height: 300px;
    outline: 3px solid;
    background: #fe3a3a;
    transform: translateY(-50%);
  }

  .contactos {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    color: black;
  }

  .titulocontactos {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    color: black;
  }

  .custom-text-field input {
    padding: 4px 8px !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {

  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 11px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 200px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 599px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 200px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
    margin-bottom: 30px;
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 200px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 959px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
    margin-bottom: 30px;
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 250px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1023px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
    margin-bottom: 30px;
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 250px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
    margin-bottom: 30px;
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 250px;
    max-height: 50px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .tituloformulario {
    font-size: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #607d8b;
    transform: translateY(50px);
    margin-bottom: 30px;
  }

  #contactos {
    width: auto;
    height: 300px;
    outline: 1px solid;
    background: #f5f5f5;
    transform: translateY(-60%);
    display: grid;
    place-items: center;
  }

  #btn {
    background: black;
    cursor: pointer;
    border: none;
    padding: 10px 10px;
    color: #ffebee;
    font-size: 1em;
    font-weight: bold;
    position: relative;
    border-radius: 50px;
    display: flex;
    max-width: 300px;
    max-height: 100px;
  }
  #btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      red,
      blue,
      pink,
      yellow,
      red,
      blue,
      pink,
      yellow
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }
}
</style>
