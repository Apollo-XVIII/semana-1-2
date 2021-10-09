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
                      sm="4"
                      md="8"
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
                      sm="4"
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
                      sm="4"
                      md="8"
                    >
                      <v-text-field
                        v-model="usuarioEditado.password"                        
                        label="Contraseña"
                        counter=""
                        type=password
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      md="8"
                    >
                      <v-checkbox
                        v-model="usuarioEditado.activo"
                         label="Acitivo"
                      ></v-checkbox>
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
          <v-dialog v-model="dialogEstado" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">{{ tituloMensaje }}</v-card-title>
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
      <template v-slot:[`item.activo`]="{ item }">
        <v-checkbox
          v-model="item.activo"
          @click="habilitarUsuario(item)"
        ></v-checkbox>
      </template>

      <template v-slot:[`item.acciones`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editarUsuario(item)"
        >
          mdi-pencil
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

  var bcrypt = require('bcryptjs');

  export default {
    data: () => ({
      valid: false,
      dialog: false,
      dialogEstado: false,
      tituloTabla: "Usuarios",
      tituloNuevoUsuario: "Nuevo Usuario",
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre",
        },
        { text: "E-mail", value: "correo" },
        { text: "Activo", value: "activo" },
        { text: 'Acción', value: 'acciones', sortable: false },
      ],
      nombre: "",
      nameRules: [
        (v) => !! v || "Nombre es obligatorio",
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
        _id: '',
        nombre: '',
        correo: '',
        password: '',
        passwordGuardado: '',
        activo: false,
      },
      defaultUsuario: {
        _id: '',
        nombre: '',
        correo: '',
        password: '',
        activo: false,
      },
    }),

    computed: {
      tituloForma () {
        return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
      },
      tituloMensaje() {
        let mensaje = this.usuarioEditado.activo ? 'activar' :  'desactivar'
        return "Esta seguro que quiere "+ mensaje +" a este usuario?"
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogEstado (val) {
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
        this.usuarioEditado.passwordGuardado = this.usuarioEditado.password;
        this.usuarioEditado.password = '';
        this.dialog = true
      },

      habilitarUsuario (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.usuarioEditado = Object.assign({}, item)
        this.dialogEstado = true
      },

      enableUsuarioConfirm () {
        this.update()
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
        this.dialogEstado = false
        this.$nextTick(() => {
          this.usuarioEditado = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    
      update() {
          this.usuarioEditado.password = this.usuarioEditado.passwordGuardado;
          this.usuarioEditado.passwordGuardado = '';
          this.axios.put(`usuario/update/${this.usuarios[this.editedIndex]._id}`,this.usuarioEditado)
            .then((res) => {
              // this.usuarios[this.editedIndex]._id = res.data._id;
              this.usuarioEditado.nombre = res.data.nombre;
              this.usuarioEditado.correo = res.data.correo;
              this.usuarioEditado.password = res.data.password;
              this.usuarioEditado.activo = res.data.activo;
            })
            .catch((e)=>{
              console.log('error ' + e)
            })  
          Object.assign(this.usuarios[this.editedIndex], this.usuarioEditado)
      },

      save () {
        //Es la actualizacion del registro
        if (this.editedIndex > -1) {
          this.update()
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