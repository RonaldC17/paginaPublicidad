import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';


import inicio from '../src/components/inicio/INICIO.vue';
import portafolio from '../src/components/portafolio/PORTAFOLIO.vue';
import politicadeprivacidad from '../src/components/privacidad/PRINCIPAL.vue'
import terminosycondiciones from '../src/components/terminosycondiciones/PRINCIPAL.vue';
import desarrolloweb from '../src/components/portafolio/portafolioweb/PRINCIPAL.vue'
import marketingdigital from '../src/components/portafolio/portafoliodigital/PRINCIPALDIGITAL.vue'

const routes = [  
  { path: '/inicio', component: inicio },
  { path: '/portafolio', component: portafolio },
  { 
    path: '/contactos', 
    component: () => import('../src/components/contacto/CONTACTO.vue'), 
    beforeEnter: () => {
      window.location.href = 'https://wa.link/6zajnu'; 
    },
  },
  { path: '/politicadeprivacidad', component: politicadeprivacidad },
  { path: '/terminosycondiciones', component: terminosycondiciones },
  { path: '/desarrolloweb', component: desarrolloweb },
  { path: '/marketingdigital', component: marketingdigital },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp({});
app.use(router);
app.mount('#app');

export default router;
