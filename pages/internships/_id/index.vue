<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <NuxtLink to="/internships" style="text-decoration: none; color: inherit"><v-btn color="primary" x-small text>
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
                <th class="text-left">Estudante</th>
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
                <td>{{ internship_details.estudante }}</td>
                <td>{{ internship_details.empresa }}</td>
                <td>
                  <v-chip dark small :color="getColorStatus(internship_details.status)">
                    {{ internship_details.status }}
                  </v-chip>
                </td>
                <td>{{ internship_details.dataInicial }}</td>
                <td>{{ internship_details.dataFinal }}</td>
                <td>
                  <v-chip dark small :color="getColorActivitiesPlan(internship_details.planoAtividades)
                    ">
                    {{ internship_details.planoAtividades }}
                  </v-chip>
                </td>
                <td>
                  <v-chip dark small :color="getColorrelatorio(internship_details.relatorio)">
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
        <v-data-table :headers="headers" :items="desserts" sort-by="name" class="elevation-1">
          <template #item.status="{ item }">
            <v-chip dark :color="getColorStatus(item.status)">
              {{ item.status }}
            </v-chip>
          </template>

          <template #item.planoAtividades="{ item }">
            <v-chip dark :color="getColorActivitiesPlan(item.planoAtividades)">
              {{ item.planoAtividades }}
            </v-chip>
          </template>
          <template #item.relatorio="{ item }">
            <v-chip dark :color="getColorrelatorio(item.relatorio)">
              {{ item.relatorio }}
            </v-chip>
          </template>

          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Renovações</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="600px">
                <template #activator="{ on }">
                  <v-btn color="primary" v-on="{ ...on, click: renovarEstagio }">
                    RENOVAR ESTÁGIO
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
                          <v-autocomplete v-model="editedItem.empresaId" label="Empresa" :disabled="disabled == true"
                            :items="itemsCompanies" item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete v-model="editedItem.professorId" label="Orientador" :items="itemsProfessores"
                            item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete v-model="editedItem.supervisor" label="Supervisores" :items="itemsSupervisores"
                            item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.dataInicial" label="Data de início"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.dataFinal" label="Data de término"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.remuneracao" label="Bolsa (R$)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.ajuda" label="Auxílio (R$)"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.codigoSeguroSaude" label="Número do Seguro"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.companhiaSeguroSaude" label="Seguradora"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.horasSemanaisTrabalho"
                            label="Carga horária semanal"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.categoria" :items="itemscategoria" label="Categoria"></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.modalidade" :items="itemsmodalidade"
                            label="Modalidade"></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.status" :items="itemsStatus" label="Status"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.planoAtividades" :items="itemsActivitiesPlan"
                            label="Plano de Atividades"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.relatorio" :items="itemsrelatorio" label="Relatório"></v-select>
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
import baseURL from '../../../api'


export default {
  data: () => ({
    dessertsEdited: [],
    itemsStudents: [],
    itemsCompanies: [],
    itemsSupervisores: [],
    itemsProfessores: [],
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
        text: 'Estudante',
        align: 'start',
        sortable: false,
        value: 'estudante[0].nome',
      },
      { text: 'Empresa', value: 'empresa[0].nome', sortable: false },
      // { text: 'Status', value: 'status', sortable: false },
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
      nome: '',
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
    disabled: false
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

      const students = await axios.get(`${baseURL}estudante/findAll`)
      debugger
      this.itemsStudents = students.data
    },

    async getCompanies() {

      const companies = await axios.get(`${baseURL}empresas/findAll`)
      debugger
      this.itemsCompanies = companies.data
    },
    async getSupervisores() {
      debugger
      const supervisores = await axios.get(`${baseURL}supervisores/findAllEmpresa/${this.empresaId.id}`)
      debugger
      this.itemsSupervisores = supervisores.data;

    },
    async getProfessores() {
      const professores = await axios.get(`${baseURL}professores/findAll`)

      this.itemsProfessores = professores.data
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
        `${baseURL}estagios/${Number(this.$route.params.id)}`
      )
      debugger
      this.internship_details = internshipDetails.data;
      this.internship_details.estudante = internshipDetails.data.estudante[0].nome;
      this.internship_details.empresa = internshipDetails.data.empresa[0].nome;
      this.internship_details.dataInicial = moment(internshipDetails.data.dataInicial).format('DD-MM-YYYY');
      this.internship_details.dataFinal = moment(internshipDetails.data.dataFinal).format('DD-MM-YYYY');
    },

    async showPeriods() {

      const periods = await axios.get(
        `${baseURL}estagios/findAllEstagio/${Number(this.$route.params.id)}`
      )
      this.dessertsEdited = periods.data

      this.desserts = this.dessertsEdited

    
    },

    async store() {
      try {
        const renovacao = await axios.post(`${baseURL}estagios/create`, {
          estagioReferenteId: this.$route.params.id,
          estudanteId: this.internship_details.student_id,
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
        
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        
      }
    },

    async update(id) {
      try {
        const student = await axios.put(`${baseURL}estagios/${id}`, {
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
        
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        
      }
    },
    async destroy(id) {
      await axios.delete(`${baseURL}periods/${id}`)
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
      
      const date = moment(str, 'DD/MM/YYYY')
      const dateFormated = date.format('YYYY-MM-DD')
      

      return dateFormated
    },

    initialize() {
      this.internship_id = this.$route.params.id
      

      this.getInternships();
      this.showPeriods();
      this.getStudents();
      this.getCompanies();
      this.getSupervisores();
      this.getProfessores();
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    renovarEstagio() {
      this.editedIndex = this.desserts.indexOf(this.internship_details)
      this.editedItem = Object.assign({}, this.internship_details)
      this.dialog = true
      this.disabled = true
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
        
      } else {
        this.store()
      }
      this.close()
    },
  },
}
</script>
