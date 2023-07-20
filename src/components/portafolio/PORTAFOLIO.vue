<template>
    <div>
        <MyMenu></MyMenu>
        <titulotrabajos></titulotrabajos>
        <trabajosmark></trabajosmark>
        <trabajosdesarrollo></trabajosdesarrollo>
        <MyFooter></MyFooter>
    </div>     
</template>
<script>
    import MyMenu from './menu.vue'
    import trabajosmark from './trabajos/trabajosmark.vue'
    import trabajosdesarrollo from './trabajos/trabajosdesarrollo.vue'
    import titulotrabajos from './trabajos/titulotrabajos.vue'
    import MyFooter from './footer.vue'

    export default {
        name: 'inicio',
        components: {
            MyMenu,
                trabajosmark,
                trabajosdesarrollo,
                titulotrabajos,
            MyFooter
        },
    }
</script>