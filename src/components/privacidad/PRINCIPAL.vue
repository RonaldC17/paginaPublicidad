<template>
    <div>
        <MyMenu></MyMenu>
        <politicadeprivacidad></politicadeprivacidad>
        <MyFooter></MyFooter>
    </div>     
</template>
<script>
    import MyMenu from './menu.vue'
    import politicadeprivacidad from './politicadeprivacidad.vue'
    import MyFooter from './footer.vue'

    export default {
        name: 'privacidad',
        components: {
            MyMenu,
            politicadeprivacidad,
            MyFooter
        },
    }
</script>