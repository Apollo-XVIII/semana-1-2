<template>
<v-container>
  <v-card
    class="mx-auto overflow-y-auto"
    height="600"
    v-scroll.self="onScroll">
    <v-app-bar
      color="brown lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Administración</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Usuarios' }">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'GestionRecetas' }">
            <v-list-item-icon>
              <v-icon>mdi-cupcake</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Recetas</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'GestionPreparaciones' }">
            <v-list-item-icon>
              <v-icon>mdi-coffee</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Preparaciones</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  <v-main>
      <router-view/>
  </v-main>
  </v-card>

</v-container>
</template>
<script>

  export default {

    name: 'Administracion',

    data: () => ({
      drawer: false,
      group: null,
      scrollInvoked: 0, 
    }),
    methods: {
      onScroll () {
        this.scrollInvoked++
      },
    },
  }
</script>

