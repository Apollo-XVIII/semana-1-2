<template>
  <v-container>
    <template slot="progress">
      <v-progress-linear
        color="yellow lighten-2"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img contain :src="`../img/${receta.imagen}`" height="250"></v-img>

    <v-card-title class="text-h6 brown--text darken-2--text">
      {{ receta.nombre }}</v-card-title
    >

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>
      <div class="my-6"></div>
      <v-divider class="mx-0"></v-divider>

      <div class="my-6"></div>

      <div>
        <span class="text brown--text darken-2--text">
          {{ receta.descripcion }}</span
        >
      </div>
    </v-card-text>
        <v-card-actions>
          <v-btn color="brown darken-1" text  @click="verReceta(receta)">
            {{ titulo_boton }}
          </v-btn>
        </v-card-actions>
  </v-container>
</template>

<script>
export default {
  name: "TheRecetas",
  props: ["receta"],
  data() {
    return {
      titulo_boton: "Ver receta"
    }
  },

  methods: {
    verReceta(item) {
      this.$router.push({ 
        name: 'Receta', 
        params: { id: item._id }
      })
    }
  }
};
</script>