<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <NuxtChild :key="$route.params.id" />
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="desserts" sort-by="nome" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Empresas</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                    Novo
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <!--  nome, companyId, email, telefone, endereco -->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.nome" label="Nome da empresa"
                            :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.cnpj" label="CNPJ" :rules="[rules.cnpj]"
                            v-mask="'##.###.###/####-##'"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.email" label="Email" :rules="email"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field v-model="editedItem.telefone" label="Telefone" :rules="[rules.telefone]"
                            v-mask="'(##) #####-####'"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field v-model="editedItem.endereco" label="Endereço"
                            :rules="[rules.required]"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="600px">
                <v-card>
                  <v-card-title class="text-h5">Tem certeza que deseja apagar este item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small class="mr-2" color="primary" dark v-bind="attrs" v-on="on">
                    mdi-dots-vertical
                  </v-icon>
                </template>

                <v-list>
                  <div>
                    <v-btn color="primary" x-small text @click="companyMore(item.id)">
                      Gerenciar Supervisores
                    </v-btn>
                  </div>
                  <div>
                    <v-btn color="primary" x-small text @click="editItem(item)">
                      Editar
                    </v-btn>
                  </div>
                  <div>
                    <v-btn color="primary" x-small text @click="deleteItem(item)">
                      Excluir
                    </v-btn>
                  </div>
                </v-list>
              </v-menu>
            </div>
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
import baseURL from '../../api'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    email: [
      (v) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'E-mail invalido'
      },
    ],
    headers: [
      // nome, companyId, email, telefone, endereco

      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
      },
      { text: 'CNPJ', value: 'cnpj', sortable: false },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Telefone', value: 'telefone', sortable: false },
      { text: 'Endereço', value: 'endereco', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    rules: {
      required: value => !!value || 'Campo obrigatório',
      cnpj: value => String(value).length > 13 || 'Incompleto',
      telefone: value => String(value).length > 14 || 'Incompleto',
    },
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      nome: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
    },
    defaultItem: {
      id: '',
      nome: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nova Empresa' : 'Editar Empresa'
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
    async store() {
      try {
        const company = await axios.post(`${baseURL}empresas/create`, {
          nome: this.editedItem.nome,
          cnpj: this.editedItem.cnpj,
          email: this.editedItem.email,
          telefone: this.editedItem.telefone,
          endereco: this.editedItem.endereco,
        })

        // eslint-disable-next-line no-undef
        console.log(company)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    async update(id) {
      try {
        const company = await axios.put(
          `${baseURL}empresas/${id}`,
          this.editedItem
        )

        // eslint-disable-next-line no-undef
        console.log(company)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error)
      }
    },
    async destroy(id) {
      await axios.delete(`${baseURL}empresas/${id}`)
      this.initialize()
    },

    async initialize() {
      const companies = await axios.get(`${baseURL}empresas/findAll`)

      this.desserts = companies.data
    },

    companyMore(id) {
      this.$router.push(`/companies/${id}`)
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

