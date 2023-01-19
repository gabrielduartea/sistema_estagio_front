<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <NuxtLink
          to="/internships"
          style="text-decoration: none; color: inherit"
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
                <th class="text-left">Aluno</th>
                <th class="text-left">Empresa</th>
                <th class="text-left">Status</th>
                <th class="text-left">Início</th>
                <th class="text-left">Fim</th>
                <th class="text-left">Plano de Atividades</th>
                <th class="text-left">Relatório</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ internship_details.student_name }}</td>
                <td>{{ internship_details.company_name }}</td>
                <td>
                  <v-chip
                    dark
                    small
                    :color="getColorStatus(internship_details.status)"
                  >
                    {{ internship_details.status }}
                  </v-chip>
                </td>
                <td>{{ internship_details.dataInicial }}</td>
                <td>{{ internship_details.dataFinal }}</td>
                <td>
                  <v-chip
                    dark
                    small
                    :color="
                      getColorActivitiesPlan(internship_details.planoAtividades)
                    "
                  >
                    {{ internship_details.planoAtividades }}
                  </v-chip>
                </td>
                <td>
                  <v-chip
                    dark
                    small
                    :color="getColorrelatorio(internship_details.relatorio)"
                  >
                    {{ internship_details.relatorio }}
                  </v-chip>
                </td>
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
          
            <v-chip dark small :color="getColorStatus(item.status)">
              {{ item.status }}
            </v-chip>
          

          
            <v-chip
              dark
              small
              :color="getColorActivitiesPlan(item.planoAtividades)"
            >
              {{ item.planoAtividades }}
            </v-chip>
          

          
            <v-chip dark small :color="getColorrelatorio(item.relatorio)">
              {{ item.relatorio }}
            </v-chip>
          

          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Renovações</v-toolbar-title>
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
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete
                            v-model="editedItem.empresaId"
                            label="Empresa"
                            :items="itemsCompanies"
                            item-text="name"
                            item-value="id"
                          ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.professorId"
                            label="Orientador"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.supervisor"
                            label="Supervisor"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.dataInicial"
                            label="Data de início"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.dataFinal"
                            label="Data de término"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.remuneracao"
                            label="Bolsa (R$)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.ajuda"
                            label="Auxílio (R$)"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.codigoSeguroSaude"
                            label="Número do Seguro"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.companhiaSeguroSaude"
                            label="Seguradora"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.horasSemanaisTrabalho"
                            label="Carga horária semanal"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="editedItem.categoria"
                            :items="itemscategoria"
                            label="Categoria"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="editedItem.modalidade"
                            :items="itemsmodalidade"
                            label="Modalidade"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="editedItem.status"
                            :items="itemsStatus"
                            label="Status"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="editedItem.planoAtividades"
                            :items="itemsActivitiesPlan"
                            label="Plano de Atividades"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="editedItem.relatorio"
                            :items="itemsrelatorio"
                            label="Relatório"
                          ></v-select>
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
import moment from 'moment'
import api from '../../../api'

export default {
  data: () => ({
    dessertsEdited: [],
    itemsStudents: [],
    itemsCompanies: [],
    itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado'],
    itemsActivitiesPlan: ['Pendente', 'Entregue'],
    itemsrelatorio: ['Pendente', 'Entregue'],
    itemscategoria: ['Obrigatório', 'Não Obrigatório'],
    itemsmodalidade: ['Presencial', 'Remoto', 'Híbrido'],
    internship_id: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Aluno',
        align: 'start',
        sortable: false,
        value: 'student_name',
      },
      { text: 'Empresa', value: 'company_name', sortable: false },
      { text: 'Status', value: 'status', sortable: false },
      { text: 'Início', value: 'dataInicial', sortable: false },
      { text: 'Fim', value: 'dataFinal', sortable: false },
      {
        text: 'Plano de Atividades',
        value: 'planoAtividades',
        sortable: false,
      },
      { text: 'Relatório', value: 'relatorio', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      internship_id: '',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataInicial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasSemanaisTrabalho: '',
      categoria: '',
      modalidade: '',
      planoAtividades: '',
      relatorio: '',
      status: '',
    },
    defaultItem: {
      id: '',
      internship_id: '',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataInicial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasSemanaisTrabalho: '',
      categoria: '',
      modalidade: '',
      planoAtividades: '',
      relatorio: '',
      status: '',
    },
    internship_details: {
      internship_id: '',
      student_name: '',
      company_name: '',
      teacher_name: '',
      supervisor: '',
      dataInicial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasSemanaisTrabalho: '',
      categoria: '',
      modalidade: '',
      planoAtividades: '',
      relatorio: '',
      status: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Renovação ' : 'Editar Renovação'
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
    async getStudents() {
      debugger
      const students = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/estudantes/findAll`)

      this.itemsStudents = students.data
    },

    async getCompanies() {
      const companies = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/empresas/findAll`)

      this.itemsCompanies = companies.data
    },
    getColorStatus(statusColor) {
      if (statusColor === 'Em andamento') return 'orange'
      else if (statusColor === 'Finalizado') return 'green'
      else return 'red'
    },

    getColorActivitiesPlan(statusColor) {
      if (statusColor === 'Pendente') return 'red'
      else return 'green'
    },

    getColorrelatorio(statusColor) {
      if (statusColor === 'Pendente') return 'red'
      else return 'green'
    },
    async getInternships() {
      const internshipDetails = await axios.get(
        `https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/${this.$route.params.id}`
      )
      const internshipEdited = internshipDetails.data
      const internshipAux = internshipEdited.map(this.formatDateForBrazil)

      this.internship_details = internshipAux[0]

      console.log(this.internship_details, '<=====')
    },

    async showPeriods() {
      const periods = await axios.get(
        `https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/${this.id}`
      )
      this.dessertsEdited = periods.data

      this.desserts = this.dessertsEdited.map(this.formatDateForBrazil)

      console.log(this.desserts)
    },

    async store() {
      try {
        const student = await axios.post(`https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/create`, {
          internship_id: this.$route.params.id,
          student_id: this.internship_details.student_id,
          empresaId: this.editedItem.empresaId,
          professorId: this.editedItem.professorId,
          supervisor: this.editedItem.supervisor,
          dataInicial: this.formatDateForISO(this.editedItem.dataInicial),
          dataFinal: this.formatDateForISO(this.editedItem.dataFinal),
          remuneracao: this.editedItem.remuneracao,
          ajuda: this.editedItem.ajuda,
          codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
          companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
          horasSemanaisTrabalho: this.editedItem.horasSemanaisTrabalho,
          categoria: this.editedItem.categoria,
          modalidade: this.editedItem.modalidade,
          planoAtividades: this.editedItem.planoAtividades,
          relatorio: this.editedItem.relatorio,
          status: this.editedItem.status,
        })

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
        const student = await axios.put(`https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/${id}`, {
          internship_id: this.$route.params.id,
          student_id: this.editedItem.student_id,
          empresaId: this.editedItem.empresaId,
          professorId: this.editedItem.professorId,
          supervisor: this.editedItem.supervisor,
          dataInicial: this.formatDateForISO(this.editedItem.dataInicial),
          dataFinal: this.formatDateForISO(this.editedItem.dataFinal),
          remuneracao: this.editedItem.remuneracao,
          ajuda: this.editedItem.ajuda,
          codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
          companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
          horasSemanaisTrabalho: this.editedItem.horasSemanaisTrabalho,
          categoria: this.editedItem.categoria,
          modalidade: this.editedItem.modalidade,
          planoAtividades: this.editedItem.planoAtividades,
          relatorio: this.editedItem.relatorio,
          status: this.editedItem.status,
        })

        // eslint-disable-next-line no-undef
        console.log(student)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error)
      }
    },
    async destroy(id) {
      await axios.delete(`https://sistema-estagio-back-production.up.railway.app/api/v1/periods/${id}`)
      this.initialize()
    },

    formatDateForBrazil(e) {
      const initialDate = moment(e.dataInicial).format('DD/MM/YYYY')
      const finalDate = moment(e.dataFinal).format('DD/MM/YYYY')
      e.dataInicial = initialDate
      e.dataFinal = finalDate

      return e
    },
    // BD ESTÁ RECEBENDO YYYY-MM-DD
    formatDateForISO(str) {
      console.log(str, 'aqui')
      const date = moment(str, 'DD/MM/YYYY')
      const dateFormated = date.format('YYYY-MM-DD')
      console.log(dateFormated)

      return dateFormated
    },

      initialize() {
      this.internship_id = this.$route.params.id
      console.log(this.internship_id)

      this.getInternships()
      this.showPeriods()
      this.getStudents()
      this.getCompanies()
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
