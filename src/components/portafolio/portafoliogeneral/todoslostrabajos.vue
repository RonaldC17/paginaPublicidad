<template>
    <div>
      <h2>Proyectos del Portafolio</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <!-- Otros detalles del proyecto... -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Proyecto 1' },
          { id: 2, title: 'Proyecto 2' },
          // Agrega más proyectos aquí...
        ],
      };
    },
  };
  </script>
  