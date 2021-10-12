<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="preparaciones"
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
                    {{ tituloNuevaPreparacion }}
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
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
                            v-model="preparacionEditada.nombre"
                            label="Nombre"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="preparacionEditada.descripcion"
                            label="Descripción"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="preparacionEditada.ingredientes"
                            label="Ingredientes"
                            hint="Hint text"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="preparacionEditada.preparacion"
                            label="Pasos de la preparación"
                            hint="Hint text"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="preparacionEditada.imagen"
                            label="Imagen"
                            ></v-text-field>
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
                    <v-card-title class="text-h6">¿Desea eliminar la preparación?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:[`item.acciones`]="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
            <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="list"
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
      dialog: false,
      dialogDelete: false,
      tituloTabla: "preparaciones",
      tituloNuevaPreparacion: "Nueva preparación",
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Descripción', value: 'descripcion' },
        { text: 'Ingredientes', value: 'ingredientes' },
        { text: 'Preparación', value: 'preparacion' },
        { text: 'Imagen', value: 'imagen' },
        { text: 'Acciones', value: 'acciones', sortable: false },
      ],
      preparaciones: [],
      editedIndex: -1,
      preparacionEditada: {
        _id: '',
        nombre: '',
        descripcion: '',
        ingredientes: '',
        preparacion: '',
        imagen: '',
      },
      defaultItem: {
        _id: '',
        nombre: '',
        descripcion: '',
        ingredientes: '',
        preparacion: '',
        imagen: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva preparación' : 'Editar preparación'
      },

    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },


    },

    created () {
      this.list()
    },

    methods: {

      list () {
         this.axios.get('preparacion/list')
          .then((response) => {
            this.preparaciones = response.data;
            this.cargando = false;
          })
          .catch((e)=>{
            console.log('error ' + e)
            return e;
          })
      },

      editItem (item) {
        this.editedIndex = this.preparaciones.indexOf(item)
        this.preparacionEditada = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.preparaciones.indexOf(item)
        this.preparacionEditada = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.axios.delete('preparacion/remove/', {
            data: { _id: this.preparaciones[this.editedIndex]._id }
          })
        .then((res) => {
          this.list();
        })
        .catch((e)=>{
          console.log('error ' + e)
        }) 
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.preparacionEditada = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.preparacionEditada = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      validatePreparacion() {

        let valido = true;

        // valido = (this.preparacionEditada.nombre.length > 0 && this.preparacionEditada.nombre.length <=100);
        // valido = valido && ((this.preparacionEditada.descripcion.length > 0 && this.preparacionEditada.descripcion.length <=100));
        // valido = valido && ((this.preparacionEditada.ingredientes.length > 0 && this.preparacionEditada.ingredientes.length <=100));
        // valido = valido && ((this.preparacionEditada.pasos.length > 0 && this.preparacionEditada.pasos.length <=100));
        // valido = valido && ((this.preparacionEditada.imagen.length > 0 && this.preparacionEditada.imagen.length <=100));
        
        //Si no es valido se tiene que mostrar mensaje
        // this.mostrarMensaje = !valido;

        return valido;

      },

      save () {
        if(this.validatePreparacion()) {

          //Es la actualizacion del registro
          if (this.editedIndex > -1) {

            this.axios.put('preparacion/update/', {
                _id: this.preparacionEditada._id,                   
                nombre: this.preparacionEditada.nombre,
                descripcion: this.preparacionEditada.descripcion,
                ingredientes: this.preparacionEditada.ingredientes,
                preparacion: this.preparacionEditada.preparacion,              
                imagen: this.preparacionEditada.imagen,
            })
            .then((res) => {
              this.list();
            })
            .catch((e)=>{
              console.log('error ' + e)
            })            
          } else {
          //Es un nuevo registro
            this.axios.post('preparacion/add', {
                    nombre: this.preparacionEditada.nombre,
                    descripcion: this.preparacionEditada.descripcion,
                    ingredientes: this.preparacionEditada.ingredientes,
                    preparacion: this.preparacionEditada.preparacion,              
                    imagen: this.preparacionEditada.imagen,
                })
              .then((res) => {
                this.preparaciones.push(res.data)
              })
              .catch((e)=>{
                console.log('error ' + e)
            })
          }
          this.close()
        }
      },
    },
  }
</script>