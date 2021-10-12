<template>
  <v-container>
    <div class="pa-4">
      <v-row>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <span class="text-h5 font-weight-bold brown--text darken-2--text">
              {{ preparacion.nombre }}</span
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
                {{ preparacion.ingredientes }}</span>
            </p>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <v-img contain :src="imagen" height="250"></v-img>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card color="brown lighten-5" class="pa-2" outlined tile>
            <span class="text-h7 font-weight-bold brown--text darken-2--text">
              {{ titulo_preparacion }}</span>
            <p></p>
            <p>
              <span class="text brown--text ligthen-2--text">
                {{ preparacion.preparacion }}</span>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

export default {
  
  name: "Preparacion",

  data() {
    return {
      titulo_ingredientes: "Ingredientes: ",
      titulo_preparacion: "Preparación: ",
      id: this.$route.params.id,
      preparacion: {},
      imagen: '',
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.axios.get(`preparacion/listOne/${this.id}`)
        .then((response) => {
          this.preparacion = response.data;
          this.imagen = '../img/' + this.preparacion.imagen;
        })
        .catch((e)=>{
          console.log('error ' + e)
        })
    },
  }
};
</script>