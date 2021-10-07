<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../img/image1.png')"
          class="my-3"
          contain
          height="90"
        />
      </v-col>

      <v-col class="mb-4">
        <h2 class="display-1 font-weight-bold mb-3 brown--text darken-4--text">Simply Coffee</h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row>
          <v-tabs>
            <v-tab @click="llamarInicio()">Inicio</v-tab>
            <v-tab @click="llamarTipos()">Tipos de Café</v-tab>
            <v-tab @click="llamarRecetas()">Recetas</v-tab>
            <v-tab @click="llamarPreparaciones()">Preparaciones</v-tab>
            <v-tab @click="llamarNoticias()">Noticias</v-tab>
            <v-tab @click="llamarNosotros()">Nosotros</v-tab>
            <v-tab @click="llamarHistoria()">Historia del Café</v-tab>
            <v-tab @click="llamarLogin()">Login</v-tab>
            <v-tab @click="llamarUsuarios()">Usuarios</v-tab>
          </v-tabs>
          <!-- <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    llamarInicio() {
      this.$router
        .push({ path: "/inicio" })
        .catch(() => {});
 
    },

    llamarTipos() {
      this.$router
        .push({ path: "/tipos" })
        .catch(() => {});
    },

    llamarRecetas() {
      this.$router
        .push({ path: "/recetas" })
        .catch(() => {});
    },

    llamarPreparaciones() {
      this.$router
        .push({ path: "/preparaciones" })
        .catch(() => {});
    },
    
    llamarNoticias() {
      this.$router
        .push({ path: "/noticias" })
        .catch(() => {});
    },

    llamarNosotros() {
      this.$router
        .push({ path: "/nosotros" })
        .catch(() => {});
    },

    llamarHistoria() {
      this.$router
        .push({ path: "/historia" })
        .catch(() => {});
    },

    llamarLogin() {
      this.$router
        .push({ path: "/login" })
        .catch(() => {});
    },

    llamarUsuarios() {
      this.$router
        .push({ path: "/usuarios" })
        .catch(() => {});
    },
  },

};
</script>


