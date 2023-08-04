<template>
    <div>
        <MyMenu></MyMenu>
        <digital></digital>
        <MyFooter></MyFooter>
    </div>     
</template>
<script>
    import MyMenu from './menu.vue'
    import digital from './digital.vue'
    import MyFooter from './footer.vue'

    export default {
        name: 'desarrollo',
        components: {
            MyMenu,
            digital,
            MyFooter
        },
    }
</script>