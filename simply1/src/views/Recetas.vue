<template>
  <v-row dense align="center" justify="center">
    <v-col class="d-flex justify-space-around">
      <span class="text-h5 font-weight-bold brown--text darken-2--text">
        {{ titulo_seccion }}</span
      >
    </v-col>
    <v-col v-for="(item, index) of recetas" :key="index">
      <v-card class="mx-auto my-12" max-width="374">
        <the-recetas :receta="item"></the-recetas>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import TheRecetas from "../components/TheRecetas.vue";

export default {
  name: "Recetas",
  components: {
    TheRecetas,
  },
  data: () => ({
    loading: false,
    titulo_seccion: "Recetas",
    titulo_boton: "Ver receta",
    recetas: [],
  }),

  created () {
    this.initialize()
  },

methods: {
    initialize () {
      this.axios.get('receta/list')
        .then((response) => {
          this.recetas = response.data;
        })
        .catch((e)=>{
          console.log('error ' + e)
        })
    },

  },
};
</script>