<template>
<v-container>
  <v-layout wrap class="brown lighten-4">
    <v-flex class="brown text-center white--text" xs12>
      <h1>DENOMINACIÓN DE ORIGEN (DO)</h1>
    </v-flex>

    <v-flex xs6 align-self-center>
      <img src="../img/sello_DO.png" alt="DO" width="500" />
    </v-flex>

    <v-flex xs5 align-self-center brown--text>
      <p>
        Es el nombre o indicación de un lugar geográfico, que puede ser un país
        o región determinada, que designa un producto que por ser originario de
        dicha región y por las costumbres de producción o trasformación de sus
        habitantes, tiene unas características y/o reputación que lo hacen
        diferente de los productos semejantes provenientes de otros lugares
        geográficos. <br>La Federación Nacional de Cafeteros de Colombia (FNCC)
        solicitó la denominación de origen del producto “Café de Colombia”, la
        cual fue otorgada por la Superintendencia de Industria y Comercio (SIC)
        del país mediante la resolución 4819 de 4 de marzo de 2005. <br>Esta
        denominación de origen del producto caracteriza al Café de Colombia como
        un producto “Suave de taza limpia, con acidez y cuerpo medio/alto, aroma
        pronunciado y completo, propio del café proveniente únicamente de la
        especie arábiga, cuyas características se deben a los factores
        naturales, así como a los factores humanos de sometimiento al proceso de
        beneficio húmedo, de recolección selectiva, con un alto componente
        manual, a ser cultivado por cafeteros de tradición y conocimiento”.
        <br>Dentro de este contexto y bajo la denominación de origen del producto
        CAFÉ DE COLOMBIA, la FNCC solicitó y obtuvo las siguientes DO para otros
        linajes de café de la variedad arábiga del producto, la cuales son las
        siguientes:
      </p>

       <v-btn elevation="4" rounded @click="IrCertificaciones('Detalledo')">
                CERTIFICACIONES DO
        </v-btn>

    </v-flex>
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
    IrCertificaciones(item) {
          this.$router.push({ 
          name: item
        })      
    }
  }
}
</script>
