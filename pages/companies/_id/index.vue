<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <NuxtLink to="/companies" style="text-decoration: none; color: inherit"
          ><v-btn color="primary" x-small text>
            <v-icon small> mdi-chevron-left </v-icon> Voltar
          </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table dense class="elevation-1">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">CNPJ</th>
                <th class="text-left">Email</th>
                <th class="text-left">Telefone</th>
                <th class="text-left">Endereço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ company_details.name }}</td>
                <td>{{ company_details.company_id }}</td>
                <td>{{ company_details.email }}</td>
                <td>{{ company_details.phone }}</td>
                <td>{{ company_details.address }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="name"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Supervisores</v-toolbar-title>
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
                  <!--  name, email, phone-->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Nome"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.email"
                            label="Email"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.phone"
                            label="Telefone"
                          ></v-text-field>
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

export default {
  data: () => ({
    company_id: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      // name, email, phone,

      {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Telefone', value: 'phone', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      name: '',
      company_id: '', // ID
      email: '',
      phone: '',
    },
    defaultItem: {
      id: '',
      name: '',
      company_id: '', // ID
      email: '',
      phone: '',
    },
    company_details: {
      id: '',
      name: '',
      company_id: '', // CNPJ
      email: '',
      phone: '',
      address: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Supervisor' : 'Editar Supervisor'
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
        const supervisor = await api.post(
          `supervisors`,
          {
            name: this.editedItem.name,
            email: this.editedItem.email,
            phone: this.editedItem.phone,
            company_id: this.$route.params.id,
          }
        )

        // eslint-disable-next-line no-undef
        console.log(supervisor)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    async update(id) {
      try {
        const supervisor = await api.put(
          `supervisors/${id}`,
          this.editedItem
        )

        // eslint-disable-next-line no-undef
        console.log(supervisor)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error)
      }
    },
    async destroy(id) {
      await api.delete(`supervisors/${id}`)
      this.initialize()
    },

    async showSupervisors(id) {
      const companies = await api.get(
        `supervisors/${id}`
      )
      this.desserts = companies.data
    },

    async initialize() {
      this.company_id = this.$route.params.id

      const companyDetails = await api.get(
        `companies/${this.company_id}`
      )
      this.showSupervisors(this.company_id)
      this.company_details = companyDetails.data
      console.log(this.company_details)
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

