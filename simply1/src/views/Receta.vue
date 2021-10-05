<template>
  <div>
    <v-row>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <span class="text-h5 font-weight-bold brown--text darken-2--text">
            {{ receta[0].nombre }}</span
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row>

      <v-col cols="6" md="4">
        <v-card color="brown lighten-5" class="pa-2" outlined tile>
          <span class="text-h7 font-weight-bold brown--text darken-2--text">
            {{ titulo_ingredientes }}</span>
          <p></p>
          <p>
            <span class="text brown--text ligthen-2--text">
              {{ receta[0].ingredientes }}</span>
          </p>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <v-img contain :src="receta[0].imagen" height="250"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card color="brown lighten-5" class="pa-2" outlined tile>
          <span class="text-h7 font-weight-bold brown--text darken-2--text">
            {{ titulo_preparacion }}</span>
          <p></p>
          <p>
            <span class="text brown--text ligthen-2--text">
              {{ receta[0].preparacion }}</span>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    titulo_ingredientes: "Ingredientes: ",
    titulo_preparacion: "Preparación: ",
    receta: [
      {
        id: "1",
        nombre: "Aquí va el nombre de la receta",
        ingredientes: "Lista de los ingredientes",
        preparacion: "Pasos de la receta",
        url: "URL de referencia",
        imagen: "https://placeimg.com/640/480/any",
      },
    ],
  }),
};
</script>