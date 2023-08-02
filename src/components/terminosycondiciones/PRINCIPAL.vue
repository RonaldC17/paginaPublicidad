<template>
    <div>
        <MyMenu></MyMenu>
        <terminosycondiciones></terminosycondiciones>
        <MyFooter></MyFooter>
    </div>     
</template>
<script>
    import MyMenu from './menu.vue'
    import terminosycondiciones from './terminosycondiciones.vue'
    import MyFooter from './footer.vue'

    export default {
        name: 'condiciones',
        components: {
            MyMenu,
            terminosycondiciones,
            MyFooter
        },
    }
</script>