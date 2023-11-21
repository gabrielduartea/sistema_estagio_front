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
                <td>{{ formatTabela(internship_details.dataInicial) }}</td>
                <td>{{ formatTabela(internship_details.dataFinal) }}</td>
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
          <template #item.dataInicial="{ item }">
            <v-text readonly>{{ formatTabela(item.dataInicial) }}</v-text>
          </template>
          <template #item.dataFinal="{ item }">
            <v-text readonly>{{ formatTabela(item.dataFinal) }}</v-text>
          </template>
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Histórico de renovações</v-toolbar-title>
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
                          <v-autocomplete v-model="editedItem.estudanteId" label="Estudante" :disabled="true"
                            :items="itemsStudents" item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete v-model="editedItem.empresaId" label="Empresa" :disabled="true"
                            :items="itemsCompanies" item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete v-model="editedItem.professorId" label="Orientador(a)" :disabled="disabled == true" :items="itemsProfessores"
                            item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete v-model="editedItem.supervisorId" label="Supervisores" :disabled="disabled == true"
                            :items="itemsSupervisores" item-text="nome" item-value="id"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field v-model="dataInicial" label="Data Inicial" :disabled="disabled == true" prepend-icon="mdi-calendar"
                                readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="editedItem.dataInicial" @change="formatDateForBrazil(editedItem)" :disabled="disabled == true"
                              @input="menu1 = false" locale="pt-br"></v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field v-model="dataFinal" label="Data Final" prepend-icon="mdi-calendar" :disabled="disabled == true" readonly
                                v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="editedItem.dataFinal" @change="formatDateForBrazil(editedItem)" :disabled="disabled == true"
                              @input="menu2 = false" locale="pt-br"></v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.remuneracao" v-money="money" label="Bolsa (R$)" :disabled="disabled == true"></v-text-field> 
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.ajuda" v-money="money" label="Auxílio (R$)" :disabled="disabled == true"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.codigoSeguroSaude" label="Número do Seguro" :disabled="disabled == true"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.companhiaSeguroSaude" label="Seguradora" :disabled="disabled == true"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.horasTrabalhoSemanais"
                            label="Carga horária semanal" :disabled="disabled == true"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.categoria" :items="itemscategoria" :disabled="disabled == true" label="Categoria"></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.modalidade" :items="itemsmodalidade" :disabled="disabled == true"
                            label="Modalidade"></v-select>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="editedItem.status" :items="itemsStatus" :disabled="disabled == true" label="Status"></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save" :disabled="disabled == true">
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
              mdi-eye
            </v-icon>
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
import { VMoney } from 'v-money'
import baseURL from '../../../api'


export default {
  data: () => ({
    money: {
      decimal: '.',
      thousands: '',
      prefix: 'R$',
      suffix: '',
      precision: 2,
      masked: false
    },
    rules: {
      required: value => !!value || 'Campo obrigatório',
      cnpj: value => String(value).length > 15 || 'Incompleto',
      telefone: value => String(value).length > 14 || 'Incompleto',
    },
    dessertsEdited: [],
    itemsStudents: [],
    itemsCompanies: [],
    itemsSupervisores: [],
    itemsProfessores: [],
    itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado'],
    itemsActivitiesPlan: ['Pendente', 'Entregue'],
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
      { text: 'Orientador', value: 'professor[0].nome', sortable: false },
      // { text: 'Status', value: 'status', sortable: false },
      { text: 'Início', value: 'dataInicial', sortable: false },
      { text: 'Fim', value: 'dataFinal', sortable: false },
      { text: 'Visualizar', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      internship_id: '',
      estudanteId:'',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataInicial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasTrabalhoSemanais: '',
      categoria: '',
      modalidade: '',
      status: '',
    },
    defaultItem: {
      id: '',
      internship_id: '',
      estudanteId: '',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataInicial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasTrabalhoSemanais: '',
      categoria: '',
      modalidade: '',
      status: '',
    },
    internship_details: {
      internship_id: '',
      estudanteId: '',
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
      status: '',
    },
    disabled: false,
    dataInicial: null,
    dataFinal: null,
    empresaId: null,
    menu1: false,
    menu2: false,
  }),
  directives: { money: VMoney },

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

      const students = await axios.get(`${baseURL}estudantes/findAll`)
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
      const supervisores = await axios.get(`${baseURL}supervisores/findAllEmpresa/${this.internship_details.empresaId}`)
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
    formatData(data) {
      return moment().format('')
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
      this.internship_details.supervisor = internshipDetails.data.supervisor[0].nome;
      if (internshipDetails.data.renovacao) {
        const renovacao = JSON.parse(internshipDetails.data.renovacao);
        debugger
        this.dessertsEdited=renovacao
        debugger

        this.desserts = this.dessertsEdited
      }
    },

    async showPeriods() {

      const periods = await axios.get(
        `${baseURL}estagios/findAllEstagio/${Number(this.$route.params.id)}`
      )
      this.dessertsEdited = periods.data
      debugger

      this.desserts = this.dessertsEdited


    },

    async store() {
      try {
        const item = this.editedItem
        const renovacao = {
          estagioReferenteId: this.$route.params.id,
          estudanteId: this.editedItem.estudanteId,
          empresaId: this.editedItem.empresaId,
          professorId: this.editedItem.professorId,
          supervisorId: this.editedItem.supervisorId,
          estudante: this.editedItem.estudante,
          empresa: this.editedItem.empresa,
          professor: this.editedItem.professor,
          supervisor: this.editedItem.supervisor,
          dataInicial: new Date(this.editedItem.dataInicial),
          dataFinal: new Date(this.editedItem.dataFinal),
          remuneracao: Number(this.editedItem.remuneracao.substr(2)),
          ajuda: Number(this.editedItem.ajuda.substr(2)),
          codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
          companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
          horasSemanaisTrabalho: this.editedItem.horasSemanaisTrabalho,
          categoria: this.editedItem.categoria,
          modalidade: this.editedItem.modalidade,
          status: this.editedItem.status,
        }
        debugger
        await axios.post(`${baseURL}estagios/renovarEstagios`, renovacao)

        // eslint-disable-next-line no-undef

        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef

      }
    },

    async update(id) {
      try {
        const renovacao = await axios.post(`${baseURL}estagios/renovarEstagios`, {
          estagioReferenteId: this.$route.params.id,
          estudanteId: this.internship_details.estudanteId,
          empresaId: this.editedItem.empresaId,
          professorId: this.editedItem.professorId,
          supervisor: this.editedItem.supervisor,
          dataInicial: this.editedItem.dataInicial,
          dataFinal: this.editedItem.dataFinal,
          remuneracao: this.editedItem.remuneracao,
          ajuda: this.editedItem.ajuda,
          codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
          companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
          horasSemanaisTrabalho: this.editedItem.horasSemanaisTrabalho,
          categoria: this.editedItem.categoria,
          modalidade: this.editedItem.modalidade,
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
      debugger
      const initialDate = moment(e.dataInicial).format('YYYY-MM-DD')
      const finalDate = moment(e.dataFinal).format('YYYY-MM-DD')
      this.dataFinal = moment(e.dataFinal).format('DD/MM/YYYY')
      this.dataInicial = moment(e.dataInicial).format('DD/MM/YYYY')
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
    formatTabela(data) {
      return moment(data).format("DD/MM/YYYY")
    },

    async initialize() {
      this.internship_id = this.$route.params.id


      await this.getInternships();
      this.getStudents();
      this.getCompanies();
      this.getSupervisores();
      this.getProfessores();
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true;
      this.disabled = true;
    },
    renovarEstagio() {
      this.editedIndex = this.desserts.indexOf(this.internship_details)
      debugger
      const teste=this.internship_details
      debugger
      this.editedItem = Object.assign({}, this.internship_details)
      debugger
      this.editedItem = this.formatDateForBrazil(this.editedItem)
      debugger
      this.dialog = true
      this.disabled = false
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
      debugger
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem)
        this.formatDateForBrazil(this.editItem);
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
