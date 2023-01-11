<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title> Coordenadores </v-card-title>
      </v-col>
    </v-row>
    <!-- DIALOG CADASTAR -->
    <v-btn
      color="primary"
      dark
      justify="left"
      class="margin-left"
      @click="openDialogStore()"
    >
      novo
      <v-icon right dark> mdi-plus </v-icon>
    </v-btn>

    <v-row>
      <v-dialog
        v-model="dialogStore"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="indexCoordinators()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Cadastrar Coordenador</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="storeCoordinators()"> Salvar </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-row justify="center" class="dialog">
            <v-col cols="8">
              <v-text-field
                v-model="email"
                label="Email*"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Senha*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- DIALOG UPDATE -->
    <v-row>
      <v-dialog
        v-model="dialogUpdate"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialogUpdate = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Cadastrar Coordenador</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="updateCoordinators(id)"> Salvar </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-row justify="center" class="dialog">
            <v-col cols="8">
              <v-text-field
                v-model="email"
                label="Email*"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Nova senha"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- DIALOG DESTROY -->
    <v-row justify="center">
      <v-dialog v-model="dialogDestroy" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h6">
            Deseja relmente excluir esta informação?
          </v-card-title>
          <v-card-text
            >Ao excluir está informação não será possivel
            recuperá-la</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="dialogDestroy = false">
              cancelar
            </v-btn>
            <v-btn color="primary" dark @click="destroyCoordinators(id)">
              excluir
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- INDEX TABLE-->
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Email</th>
                <th class="text-left">Senha</th>
                <th class="text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in coordinators" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.email }}</td>
                <td>************</td>
                <td>
                  <v-btn
                    depressed
                    color="normal"
                    x-small
                    @click="openDialogUpdate(item)"
                  >
                    Editar
                    <v-icon right dark> mdi-pencil </v-icon>
                  </v-btn>

                  <v-btn
                    depressed
                    color="error"
                    x-small
                    @click="openDialogDestroy(item)"
                  >
                    Deletar
                    <v-icon right dark> mdi-trash-can</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '../api'

export default {
  name: 'Coordenadores',
  layout: 'alternative',  
  data() {
    return {
      id: '',
      email: '',
      type: '',
      password: '',
      dialogStore: false,
      dialogUpdate: false,
      dialogDestroy: false,
      notifications: false,
      sound: true,
      widgets: false,
      coordinators: [],
    }
  },
  created() {

    this.indexCoordinators()
  },

  methods: {
    clearInputs() {
  
      this.id = ''
      this.email = ''
      this.password = ''
    },

    async indexCoordinators() {
  
      const coordinators = await api.get('auth/findAll')
      this.coordinators = coordinators.data
      this.dialogStore = false
    },

    async storeCoordinators() {
  
      try {
        const coordinator = await api.post('auth', {
          email: this.email,
          type: '',
          password: this.password,
        })

        // eslint-disable-next-line no-undef
        console.log(coordinator)
        this.indexCoordinators()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    openDialogUpdate(item) {
  
      this.dialogUpdate = true
      this.id = item.id
      this.email = item.email
      this.password = item.password
      // eslint-disable-next-line no-undef
      console.log(this.id)

      this.indexCoordinators()
    },

    openDialogDestroy(item) {
  
      this.dialogDestroy = true
      this.id = item.id
    },

    openDialogStore() {
  
      this.dialogStore = true
      this.clearInputs()
    },

    async updateCoordinators(id) {
      try {
        const coordinator = await api.put(
          `auth/${id}`,
          {
            email: this.email,
            password: this.password,
          }
        )

        // eslint-disable-next-line no-undef
        console.log(coordinator)
        this.dialogUpdate = false
        this.clearInputs()
        this.indexCoordinators()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    async destroyCoordinators(id) {
      await api.delete(`auth/${id}`)
      this.indexCoordinators()
      this.dialogDestroy = false
    },
  },
}
</script>

<style scoped>
.margin-left {
  margin-left: 10px;
}

.dialog {
  margin-top: 30px;
}
</style>
