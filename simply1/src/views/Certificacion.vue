<template>
  <v-container>
    <v-layout wrap class="brown lighten-4">
      <v-flex class="brown text-center white--text" xs12>
        <h1>MARCA CERTIFICACIÓN</h1>
      </v-flex>

      <v-flex xs6 align-self-center>
        <img
          src="../img/cafe_certificacion.jpg"
          alt="MARCA_CERTIFICACION"
          width="500"
        />
      </v-flex>

      <v-flex xs5 align-self-center brown--text>
        <p>
          Las Marcas de Certificación (MC) son signos que les aseguran a los
          consumidores que el producto al que se aplican cumple con unos
          estándares de calidad previamente definidos en normas legales,
          técnicas o reglamentos. <br />
          titular de una MC se compromete a un control continuo de verificación
          de cumplimiento de los estándares preestablecidos del producto, con el
          fin de garantizar al mercado la continuidad en calidad del producto
          certificado y el mantenimiento de la reputación obtenida. Para emplear
          una MC en la etiqueta de un producto se debe cumplir con los
          estándares definidos. El titular evitará que la MC sea utilizada en
          productos que no cumplan dichos requisitos. <br />En consecuencia, las
          MC pueden ser utilizadas por cualquier empresa que esté en capacidad
          de demostrar que sus productos cumplen las normas especificadas en la
          certificación y que satisfacen los requisitos establecidos por el
          propietario de la misma, así mismo las Marcas de Certificación pueden
          utilizarse junto con la marca propia de un producto. <br />En el caso
          de la marca de certificación Café de Colombia, sus estándares están
          definidos en los países en los cuales se encuentra registrada
          (actualmente Estados Unidos y Canadá) y se encuentran principalmente
          asociados a las calidades mínimas de exportación vigentes en Colombia.
        </p>
        <router-link
          to="https://drive.google.com/file/d/17pN-NItba2YKNPZOgNrp0-Hp5Jss1NfA/view?usp=sharing"
          download
          target="_blank"
        >
          <v-btn elevation="4" rounded @click="IrListado()">
            LISTADO MARCAS CERTIFICADAS
          </v-btn>
        </router-link>
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
    IrListado() {
      return    
    }
  }
}
</script>
