<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nombre"
      class="elevation-1"
      :loading="cargando"
      loading-text="Cargando...espere por favor"
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
                color="brown lighten-1"
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
                        :counter="100"
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
                      v-if="editedIndex > -1 ? false :  true"
                    >
                      <v-text-field
                        v-model="usuarioEditado.password"                        
                        label="Contraseña"
                        counter="10"
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
                         label="Activo"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="brown lighten-11" text @click="close">Cancelar</v-btn>
                <v-btn color="brown lighten-1" text @click="save">Enviar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>

              <v-spacer></v-spacer>
                <v-alert :value="mostrarMensaje" dense outlined type="error" dismissible @click="noMensaje">
                  Los datos no son válidos
                </v-alert>

            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogActivo" max-width="500px">
            <v-card>

              <v-card-title class="text-subtitle-1">{{ tituloMensaje }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="brown lighten-1" text @click="closeEnable">Cancelar</v-btn>
                <v-btn color="brown lighten-1" text @click="habilitarUsuario()">OK
                </v-btn>

              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.activo`]="{ item }">
        <v-simple-checkbox v-model="item.activo" disabled></v-simple-checkbox>
      </template>

      <template v-slot:[`item.acciones`]="{ item }">
        <v-icon small class="mr-2"  @click="editarUsuario(item)" >mdi-pencil</v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn
          color="brown lighten-1"
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
    name: "Usuarios",
    data: () => ({
      dialog: false,
      dialogActivo: false,
      cargando: true,
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
        v => !! v || "Nombre es obligatorio",
        // v => v.length <= 100 || "El nombre debe ser menor a 100 caracteres",
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
        activo: false,
      },
      defaultUsuario: {
        _id: '',
        nombre: '',
        correo: '',
        password: '',
        activo: false,
      },
      mostrarMensaje: false,
      type: null,
    }),

    computed: {
      tituloForma () {
        return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
      },
      tituloMensaje() {
        let mensaje = this.usuarioEditado.activo ? 'activar' :  'desactivar'
        return "¿Está seguro que quiere "+ mensaje +" a este usuario?"
      },
      
    },

    watch: {
      dialog(val) {
        val || this.close();
      },

      dialogActivo(val) {
        val || this.habilitarUsuario();
      },
    },

    created () {
      this.initialize()
    },

    methods: {

      noMensaje() {
        this.mostrarMensaje = false;
      },

      initialize () {
        this.axios.get('usuario/list')
          .then((response) => {
            this.usuarios = response.data;
            this.cargando = false;
          })
          .catch((e)=>{
            console.log('error ' + e)
            return e;
          })
      },

      editarUsuario (item) {
        this.editedIndex = this.usuarios.indexOf(item);   
        this.usuarioEditado = Object.assign({}, item);
        this.dialog = true
      },

      habilitarUsuario (item) {
        console.log('estado')
        if(this.usuarioEditado.activo) {
          this.axios.put('usuario/activate/', {
            _id: this.usuarioEditado.id
          })
          .then((res) => {
            this.usuarioEditado.activo = res.data.activo;
          })
          .catch((e)=>{
            console.log('error ' + e)
          })
        } else {
          this.axios.put('usuario/deactivate/', {
            _id: this.usuarioEditado.id
          })
          .then((res) => {
            this.usuarioEditado.activo = res.data.activo;
          })
          .catch((e)=>{
            console.log('error ' + e);
          })
        }

        this.editedIndex = this.usuarios.indexOf(item);
        this.usuarioEditado = Object.assign({}, item);
        this.dialogEstado = true;
      },

      close () {
        this.dialog = false;
        this.$nextTick(() => {
          this.usuarioEditado = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
       },

      closeEnable () {
          this.dialogActivo = false
          this.$nextTick(() => {
            this.usuarioEditado = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
      },

      validateUsuario() {

        let valido = false;

        valido = (this.usuarioEditado.nombre.length > 0 && this.usuarioEditado.nombre.length <=100);
        valido = valido && ((this.usuarioEditado.password.length > 0 && this.usuarioEditado.password.length <=100));
        valido = valido && ((this.usuarioEditado.correo.length > 0 && this.usuarioEditado.correo.length <=100));
        
        //Si no es valido se tiene que mostrar mensaje
        this.mostrarMensaje = !valido;

        return valido;

      },

      save () {

        if(this.validateUsuario()) {

          //Es la actualizacion del registro
          if (this.editedIndex > -1) {
            this.axios.put('usuario/update/', {
              _id: this.usuarioEditado._id,
              nombre: this.usuarioEditado.nombre,
              correo: this.usuarioEditado.correo,
              activo: this.usuarioEditado.activo
            })
            .then((res) => {
              this.initialize();
            })
            .catch((e)=>{
              console.log('error ' + e)
            })            
          } else {
          //Es un nuevo registro
            this.axios.post('usuario/add', {
                  nombre: this.usuarioEditado.nombre,
                  correo: this.usuarioEditado.correo,
                  password: this.usuarioEditado.password,
                  activo: this.usuarioEditado.activo
                })
              .then((res) => {
                this.usuarios.push(res.data)
              })
              .catch((e)=>{
                console.log('error ' + e)
            })
          }
          this.close()
        } 
      },
    },
  };
</script>