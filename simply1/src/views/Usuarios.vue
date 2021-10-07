<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nombre"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>{{ tituloTabla }}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ tituloNuevoUsuario }}
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ tituloForma }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="12"
                    >
                      <v-text-field
                        v-model="usuarioEditado.nombre"
                        label="Nombre"
                        :counter="50"
                        :rules="nameRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-text-field
                        v-model="usuarioEditado.correo"
                        label="Correo"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >
                      <v-text-field
                        v-model="usuarioEditado.password"
                        label="Contraseña"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8"
                    >Habilitado
                      <v-simple-checkbox
                        v-model="usuarioEditado.habilitado"
                             
                      ></v-simple-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Enviar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Esta seguro que quiere deshabilitar este usuario?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeEnable">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="enableUsuarioConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.habilitado`]="{ item }">
        <v-simple-checkbox
          v-model="item.habilitado"
          disabled
        ></v-simple-checkbox>
      </template>

      <template v-slot:[`item.acciones`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editarUsuario(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="habilitarUsuario(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      dialog: false,
      dialogDelete: false,
      tituloTabla: "Usuarios",
      tituloNuevoUsuario: "Nuevo Usuario",
      chkHabilitado: true,
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre",
        },
        { text: "E-mail", value: "correo" },
        { text: "Habilitado", value: "habilitado" },
        { text: 'Acciones', value: 'acciones', sortable: false },
      ],
      nombre: "",
      nameRules: [
        (v) => !!v || "Nombre es obligatorio",
        // (v) => v.length <= 50 || "El nombre debe ser menor a 50 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail es obligatorio",
        (v) => /.+@.+/.test(v) || "E-mail debe ser válido",
      ],
      usuarios: [],
      editedIndex: -1,
      usuarioEditado: {
        id: '',
        nombre: '',
        correo: '',
        password: '',
        habilitado: true,
      },
      defaultUsuario: {
        id: '',
        nombre: '',
        correo: '',
        password: '',
        habilitado: true,
      },
    }),

    computed: {
      tituloForma () {
        return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeEnable()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.axios.get('usuario/list')
          .then((response) => {
            this.usuarios = response.data;
          })
          .catch((e)=>{
            console.log('error ' + e)
          })
      },

      editarUsuario (item) {
        this.editedIndex = this.usuarios.indexOf(item)        
        this.usuarioEditado = Object.assign({}, item)
        this.dialog = true
      },

      habilitarUsuario (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.usuarioEditado = Object.assign({}, item)
        this.dialogDelete = true
      },

      enableUsuarioConfirm () {
        this.usuarios.splice(this.editedIndex, 1)
        this.closeEnable()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.usuarioEditado = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeEnable () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.usuarioEditado = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    
      save () {
        //Es la actualizacion del registro
        if (this.editedIndex > -1) {
          this.axios.put(`usuario/update/${this.usuarios[this.editedIndex]._id}`,this.usuarioEditado)
            .then((res) => {
              this.usuarios[this.editedIndex]._id = res.data.id;
              this.usuarios[this.editedIndex].nombre = res.data.nombre;
              this.usuarios[this.editedIndex].correo = res.data.correo;
              this.usuarios[this.editedIndex].password = res.data.password;
              this.usuarios[this.editedIndex].habilitado = res.data.habilitado;
              // Object.assign(this.usuarios[this.editedIndex], this.usuarioEditado)
            })
            .catch((e)=>{
              console.log('error ' + e)
            })  
          Object.assign(this.usuarios[this.editedIndex], this.usuarioEditado)
        } else {
        //Es un nuevo registro
          this.axios.post('usuario/add',this.usuarioEditado)
            .then((res) => {
              this.usuarios.push(res.data)
            })
            .catch((e)=>{
              console.log('error ' + e)
            }) 
        }
        this.close()
      },
    },
  };
</script>