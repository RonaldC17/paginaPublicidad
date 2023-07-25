<template>
  <div>
    <MyMenu></MyMenu>
    <Nosotros></Nosotros>
    <Servicios></Servicios>
    <Planes></Planes>
    <testimonios></testimonios>
    <c2a2></c2a2>
    <Agregados></Agregados>
    <Contador></Contador>
    <Trabajadores></Trabajadores>
    <Formcontacto></Formcontacto>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Trabajadores from "./trabajadores.vue";
import testimonios from "./testimonios.vue";
import Nosotros from "./nosotros.vue";
import MyFooter from "./footer.vue";
import MyMenu from "./menu.vue";
import Formcontacto from "./formcontacto.vue";
import Servicios from "./servicios.vue";
import C2a from "./C2A/c2a.vue";
import C2a1 from "./C2A/c2a1.vue";
import Planes from "./planes/planes.vue";
import c2a2 from "./C2A/c2a2.vue";
import Agregados from "./agregados.vue";
import Contador from "./contador.vue";

export default {
  name: "inicio",
  components: {
    testimonios,
    Nosotros,
    MyFooter,
    MyMenu,
    Formcontacto,
    Trabajadores,
    Servicios,
    C2a,
    C2a1,
    Planes,
    c2a2,
    Agregados,
    Contador,
    Trabajadores,
  },
};
</script>
