<template>
<v-app>

    <Barra />

    <v-main>
        <router-view />
    </v-main>

    <Pie />
</v-app>
</template>

<script>
import Barra from './components/Barra.vue'
import Pie from './components/Pie.vue'
export default {
    name: 'App',

    components: {
        Barra,
        Pie,
    },

    data: () => ({
        //
    }),
};
</script>
