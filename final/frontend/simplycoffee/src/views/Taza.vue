<template>
  <v-container>
    <v-layout wrap class="brown lighten-4">
      <v-flex class="brown text-center white--text" xs12>
        <h1>DIFERENCIACIÓN EN TAZA</h1>
      </v-flex>

      <v-flex xs6 align-self-center>
        <img
          src="../img/cafe_dif_taza.jpg"
          alt="diferenciacion_taza"
          width="500"
        />
      </v-flex>

      <v-flex xs5 align-self-center brown--text>
        <p>
          Es un procedimiento que se realiza por baristas, quienes son expertos
          en la preparación y catalogación del café de alta calidad. <br />Para
          este proceso se cataloga el café preparado en infusión, utilizando una
          taza que contiene agua a 90°C, agregando el producto en polvo para que
          se cree una capa en la superficie y se deja reposar por 5 minutos
          revolviendo con una cuchara en movimientos circulares para que el café
          llene la taza y repose al fondo de la misma. <br />El barista toma una
          cuchara y con su dorso rompe la capa formado, de esta manera evalúa el
          aroma y vapores que emanan de la preparación, posteriormente saca una
          muestra del café diluido, realiza un sorbo fuerte con e fin de que la
          infusión ingrese atomizada en la boca y de esta manera evaluar la
          interacción de la bebida entre el olfato y las papilas gustativas y
          así evaluar de manera cuantitativa y cualitativa las características
          del café. <br />Para llevar registro del proceso, el barista registra
          la información recolectada dentro de un formato predefinido en el cual
          califica los siguientes aspectos:
        </p>
      </v-flex>

      <v-flex xs12 align-self-center>
        <v-simple-table
          fixed-header
          height="300px"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ASPECTOS A EVALUAR</th>
                <th class="text-center">¿QUÉ EVALÚA?</th>
                <th class="text-center">CALIFICACIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in aspectos" :key="item.aspectos">
                <td>{{ item.aspectos }}</td>
                <td>{{ item.evalua }}</td>
                <td>{{ item.calificacion }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        aspectos: [
          {
            aspectos: 'Limpieza',
            evalua: "Concentración del sabor del producto",
            calificacion: "Entre 0 y 8",
          },
          {
            aspectos: 'Dulzura',
            evalua: "Dulzura natural del producto",
            calificacion: "Entre 0 y 8",
          },
          {
            aspectos: 'Acidez',
            evalua: "Nivel de acidez no ofensivo al paladar",
            calificacion: "Entre 0 y 8 y se establecen rangos de Alto, medio y bajo",
          },
          {
            aspectos: 'Cuerpo',
            evalua: "Sensación que percibe la boca al degustar el café",
            calificacion: "Entre 0 y 8 y se establecen rangos de Alto, medio y bajo",
          },
          {
            aspectos: 'Sabor',
            evalua: "Presencia del sabor agradable al gusto",
            calificacion: "Entre 0 y 8",
          },
          {
            aspectos: 'Sabor residual',
            evalua: "Sabor agradable que queda en la boca después de ser tomado",
            calificacion: "Entre 0 y 8",
          },
          {
            aspectos: 'Balance',
            evalua: "Balance sensorial entre aroma y sabor",
            calificacion: "Entre 0 y 8",
          },
          {
            aspectos: 'Impresión global',
            evalua: "Calificación cualitativa general de las características globales del producto",
            calificacion: "Entre 0 y 8",
          },
        ],
      }
    },
  }
</script>