<template>
<v-container>
    <v-layout wrap>

        <v-flex class="brown text-center white--text" xs12>
            <h1>TIPOS DE CAFÉ</h1>
        </v-flex>

        <v-layout class="mt-1 mb-1 brown lighten-4" justify-center>
            <v-flex class="brown white--text text-center" xs3>
                <h2>Denominación de Origen</h2>                              
                <v-btn elevation="4" rounded @click="IrVariedad('DO')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="155" height="200">            
                <img src="../img/sello_DO.png" alt="DO">
                </v-avatar>
            </v-flex>

            <v-flex class="brown lighten-2 black--text text-center" xs3>
                <h2>Marca Certificación</h2>
                <v-btn elevation="4" rounded @click="IrVariedad('Certificacion')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="200" height="200">  
                <img src="../img/cafe_certificacion.jpg" alt="certificacion" width="200">
                </v-avatar>
            </v-flex>

            <v-flex class="brown white--text text-center" xs3>
                <h2>Diferenciación en Taza</h2>
                <v-btn elevation="4" rounded @click="IrVariedad('Taza')">
                Ver información
                </v-btn>
                <br>
                <v-avatar width="200" height="200">             
                <img src="../img/cafe_dif_taza.jpg" alt="taza" width="150">
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
    IrVariedad(item) {
        this.$router.push({ 
            name: item
        })      
    }
  }
}
</script>
