<template>
<v-container>
    <v-layout wrap>

        <v-flex class="brown text-center white--text" xs12>
            <h1>HISTORIA DEL CAFÉ</h1>
        </v-flex>

        <v-layout class="mt-1 mb-1 brown lighten-4" justify-center>
            <v-flex class="brown white--text text-center" xs3>
                <h2>El café en el mundo</h2>                               
                <v-btn elevation="4" rounded @click="IrHistoria('Mundo')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="200" height="200">            
                <img src="../img/cafe_mundo.jpg" alt="mundo">
                </v-avatar>
            </v-flex>

            <v-flex class="brown lighten-2 black--text text-center" xs3>
                <h2>Variedades de café</h2>
                <v-btn elevation="4" rounded @click="IrHistoria('Variedad')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="200" height="200">  
                <img src="../img/cafe_variedades.jpg" alt="variedades" width="200">
                </v-avatar>
            </v-flex>

            <v-flex class="brown white--text text-center" xs3>
                <h2>El café en Colombia</h2>
                <v-btn elevation="4" rounded @click="IrHistoria('Colombia')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="165" height="200">             
                <img src="../img/cafe_colombia.jpg" alt="colombia" width="150">
                </v-avatar>
            </v-flex>
        </v-layout>

    </v-layout>
</v-container>
</template>


<script>

export default {
  
  name: "Tipos",

  data() {
    return {
    }
  },

  methods: {
    IrHistoria(item) {
        this.$router.push({ 
            name: item
        })      
    }
  }
}
</script>
