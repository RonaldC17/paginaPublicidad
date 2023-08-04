<template>
    <div>
        <MyMenu></MyMenu>
        <desarrolloweb></desarrolloweb>
        <MyFooter></MyFooter>
    </div>     
</template>
<script>
    import MyMenu from './menu.vue'
    import desarrolloweb from './desarrolloweb.vue'
    import MyFooter from './footer.vue'

    export default {
        name: 'web',
        components: {
            MyMenu,
            desarrolloweb,
            MyFooter
        },
    }
</script>