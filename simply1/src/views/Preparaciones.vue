<template>
<v-container>

  <v-row dense align="center" justify="center">
    <v-col class="d-flex justify-space-around">
      <span class="text-h5 font-weight-bold brown--text darken-2--text">
        {{ titulo_seccion }}</span
      >
    </v-col>
    <v-col v-for="(item, index) of preparaciones" :key="index" cols="3">
      <v-card class="mx-auto my-12" max-width="350" max-height="500">
        <the-preparaciones :preparacion="item"></the-preparaciones>

      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import thePreparaciones from "../components/ThePreparaciones.vue";

export default {
  name: "Preparaciones",
  components: {
    thePreparaciones,
  },
  data: () => ({
    loading: false,
    titulo_seccion: "Preparaciones",
    titulo_boton: "Ver preparaciones",
    preparaciones: [],
  }),

  created () {
    this.initialize()
  },

methods: {
    initialize () {
      this.axios.get('preparacion/list')
        .then((response) => {
          this.preparaciones = response.data;
        })
        .catch((e)=>{
          console.log('error ' + e)
        })
    },

  },
};
</script>