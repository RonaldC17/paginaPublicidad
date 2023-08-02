import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';


import inicio from '../src/components/inicio/INICIO.vue';
import portafolio from '../src/components/portafolio/PORTAFOLIO.vue';
import todoslostrabajos from '../src/components/portafolio/portafoliogeneral/todoslostrabajos.vue';
import politicadeprivacidad from '../src/components/privacidad/PRINCIPAL.vue'
import terminosycondiciones from '../src/components/terminosycondiciones/PRINCIPAL.vue';

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
  { path: '/todoslostrabajos', component: todoslostrabajos },
  { path: '/politicadeprivacidad', component: politicadeprivacidad },
  { path: '/terminosycondiciones', component: terminosycondiciones }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp({});
app.use(router);
app.mount('#app');

export default router;
