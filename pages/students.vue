<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="nome"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Estudantes</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Novo
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-form v-model="valid">
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.nome"
                            label="Nome Completo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete
                            v-model="editedItem.cursoId"
                            label="Curso"
                            :items="itemsCourses"
                            item-text="nome"
                            item-value="id"
                          ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.email"
                            label="Email"
                            :rules="email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.telefone"
                            label="Telefone"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.cpf"
                            label="CPF"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.matricula"
                            label="Matrícula"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.enderesso"
                            label="Endereço"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                      :disabled="!valid"
                    >
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="600px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Tem certeza que deseja apagar este item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancelar</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>

          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie';
import api from '../api';
export default {
  data: () => ({
    itemsCourses: [],
    email: [
      (v) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'E-mail invalido'
      },
    ],

    valid: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
      },
      { text: 'Curso', value: 'course_nome', sortable: false },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Telefone', value: 'telefone', sortable: false },
      { text: 'CPF', value: 'cpf', sortable: false },
      { text: 'Endereço', value: 'enderesso', sortable: false },
      { text: 'Matrícula', value: 'matricula', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      nome: '',
      cursoId: '',
      email: '',
      telefone: '',
      cpf: '',
      enderesso: '',
      matricula: '',
    },
    defaultItem: {
      id: '',
      nome: '',
      coursoId: '',
      email: '',
      telefone: '',
      cpf: '',
      enderesso: '',
      matricula: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Estudante' : 'Editar Estudante'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    async getCourses() {
      const courses = await api.get(`cursos/findAll`)
      debugger
      this.itemsCourses = courses.data
    },

    async store() {
      try {
        const token = Cookie.get('my_token');
        const student = await api.post('alunos/create', {
          nome: this.editedItem.nome,
          cursoId: this.editedItem.cursoId,
          email: this.editedItem.email,
          telefone: this.editedItem.telefone,
          cpf: this.editedItem.cpf,
          enderesso: this.editedItem.enderesso,
          matricula: this.editedItem.matricula,
        },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic '+token
        }})

        // eslint-disable-next-line no-undef
        console.log(student)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    async update(id) {
      try {
        const student = await api.put(
          `http://'localhost:3003/api/v1/alunos/${id}`,
          this.editedItem
        )

        // eslint-disable-next-line no-undef
        console.log(student)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error)
      }
    },
    async destroy(id) {
      await api.delete(`http://'localhost:3003/api/v1/alunos/${id}`)
      this.initialize()
    },

    async initialize() {
      const students = await api.get(`alunos/findAll`)
      this.desserts = students.data
      debugger
      await this.getCourses()
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.destroy(this.editedItem.id)
      // eslint-disable-next-line no-undef
      console.log(this.editedIndex)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
        this.update(this.editedItem.id)
        // eslint-disable-next-line no-undef
        console.log(this.editedItem)
      } else {
        this.store()
      }
      this.close()
    },
  },
}
</script>
