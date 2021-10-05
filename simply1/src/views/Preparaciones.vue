<template>
  <v-row dense align="center" justify="center">
    <v-col class="d-flex justify-space-around">
      <span class="text-h5 font-weight-bold brown--text darken-2--text">
        {{ titulo_seccion }}</span>
    </v-col>
    <v-col v-for="preparacion in preparaciones" :key="preparacion.id">
      <v-card :loading="loading" class="mx-auto my-12" max-width="354">
        <template slot="progress">
          <v-progress-linear
            color="yellow lighten-2"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img contain :src="preparacion.imagen" height="250"></v-img>

        <v-card-title class="text-h6 brown--text darken-2--text">
          {{ preparacion.nombre }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
          <div class="my-6"></div>
          <v-divider class="mx-0"></v-divider>

          <div class="my-6"></div>

          <div>
            <span class="text brown--text darken-2--text">
              {{ preparacion.descripcion }}</span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="brown darken-1" text @click="VerPreparacion">
            {{ titulo_boton }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    titulo_seccion: "Preparaciones",
    titulo_boton: "Ver preparación",
    preparaciones: [
      {
        id: "1",
        nombre: "Aquí va el nombre de la preparació 1",
        descripcion: "Aquí va una corta descripción",
        ingredientes: "Lista de los ingredientes",
        preparacion: "Pasos de la preparación",
        url: "URL de referencia",
        imagen: "https://placeimg.com/640/480/any",
      },
      {
        id: "2",
        nombre: "Aquí va el nombre de la preparacion 2",
        descripcion: "Aquí va una corta descripción",
        ingredientes: "Lista de los ingredientes",
        preparacion: "Pasos de la preparacion",
        url: "URL de referencia",
        imagen: "https://placeimg.com/640/480/any",
      },
      {
        id: "3",
        nombre: "Aquí va el nombre de la preparacion 3",
        descripcion: "Aquí va una corta descripción",
        ingredientes: "Lista de los ingredientes",
        preparacion: "Pasos de la preparacion",
        url: "URL de referencia",
        imagen: "https://placeimg.com/640/480/any",
      },
    ],
  }),

  methods: {
    VerPreparacion() {
      // this.saveTheThing()
      this.$router.push({
          path: "/preparacion"
      })
    },
  },
};
</script>