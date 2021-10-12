<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="recetas"
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
                    {{ tituloNuevaReceta }}
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
                            v-model="recetaEditada.nombre"
                            label="Nombre"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="recetaEditada.descripcion"
                            label="Descripción"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="8"
                        >
                            <v-text-field
                            v-model="recetaEditada.ingredientes"
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
                            v-model="recetaEditada.preparacion"
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
                            v-model="recetaEditada.imagen"
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
                    <v-card-title class="text-h6">¿Desea eliminar la receta?</v-card-title>
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
      tituloTabla: "Recetas",
      tituloNuevaReceta: "Nueva Receta",
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
      recetas: [],
      editedIndex: -1,
      recetaEditada: {
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
        return this.editedIndex === -1 ? 'Nueva receta' : 'Editar receta'
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
         this.axios.get('receta/list')
          .then((response) => {
            this.recetas = response.data;
            this.cargando = false;
          })
          .catch((e)=>{
            console.log('error ' + e)
            return e;
          })
      },

      editItem (item) {
        this.editedIndex = this.recetas.indexOf(item)
        this.recetaEditada = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.recetas.indexOf(item)
        this.recetaEditada = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.axios.delete('receta/remove/', {
            data: { _id: this.recetas[this.editedIndex]._id }
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
          this.recetaEditada = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.recetaEditada = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      validateReceta() {

        let valido = true;

        // valido = (this.recetaEditada.nombre.length > 0 && this.recetaEditada.nombre.length <=100);
        // valido = valido && ((this.recetaEditada.descripcion.length > 0 && this.recetaEditada.descripcion.length <=100));
        // valido = valido && ((this.recetaEditada.ingredientes.length > 0 && this.recetaEditada.ingredientes.length <=100));
        // valido = valido && ((this.recetaEditada.pasos.length > 0 && this.recetaEditada.pasos.length <=100));
        // valido = valido && ((this.recetaEditada.imagen.length > 0 && this.recetaEditada.imagen.length <=100));
        
        //Si no es valido se tiene que mostrar mensaje
        // this.mostrarMensaje = !valido;

        return valido;

      },

      save () {
        if(this.validateReceta()) {

          //Es la actualizacion del registro
          if (this.editedIndex > -1) {
            this.axios.put('receta/update/', {
                _id: this.recetaEditada._id,                   
                nombre: this.recetaEditada.nombre,
                descripcion: this.recetaEditada.descripcion,
                ingredientes: this.recetaEditada.ingredientes,
                preparacion: this.recetaEditada.preparacion,              
                imagen: this.recetaEditada.imagen,
            })
            .then((res) => {
              this.list();
            })
            .catch((e)=>{
              console.log('error ' + e)
            })            
          } else {
          //Es un nuevo registro
            this.axios.post('receta/add', {
                    nombre: this.recetaEditada.nombre,
                    descripcion: this.recetaEditada.descripcion,
                    ingredientes: this.recetaEditada.ingredientes,
                    preparacion: this.recetaEditada.preparacion,              
                    imagen: this.recetaEditada.imagen,
                })
              .then((res) => {
                this.recetas.push(res.data)
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