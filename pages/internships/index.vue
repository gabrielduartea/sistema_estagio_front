<!-- eslint-disable no-undef -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Dialog edit item alternative -->

        <!-- /Dialog edit item alternative -->

        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="name"
          class="elevation-1"
        >
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
              <v-toolbar-title>Estágios</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <!-- dialog -->
              <v-dialog v-model="dialog" max-width="900px">
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
                <!-- form ===================================================-->
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete
                            v-model="editedItem.alunoId"
                            label="Aluno"
                            :items="itemsStudents"
                            item-value="id"
                            item-text="nome"
                          ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete
                            v-model="editedItem.empresaId"
                            label="Empresa"
                            :items="itemsCompanies"
                            item-text="nome"
                            item-value="id"
                          ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-autocomplete
                            v-model="editedItem.professorId"
                            label="Orientador"
                            :items="itemsTeachers"
                            item-text="nome"
                            item-value="id"
                          ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.supervisor"
                            label="Supervisor"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.dataIncial"
                            label="Data de início"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.dataFinall"
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
                            v-model="editedItem.horasSemanaisTrabalhadas"
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
              <!-- /dialog -->
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
            <v-icon
              small
              class="mr-2"
              @click="printrelatorio(item.id, item.alunoId, item.empresaId)"
            >
              mdi-printer
            </v-icon>
            <v-icon small class="mr-2" @click="internshipMore(item.id)">
              mdi-dots-vertical
            </v-icon>
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
import jsPDF from 'jspdf'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogAlternative: false,
    itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado'],
    itemsActivitiesPlan: ['Pendente', 'Entregue'],
    itemsrelatorio: ['Pendente', 'Entregue'],
    itemscategoria: ['Obrigatório', 'Não Obrigatório'],
    itemsmodalidade: ['Presencial', 'Remoto', 'Híbrido'],
    itemsStudents: [],
    itemsCompanies: [],
    itemsTeachers: [],
    headers: [
      {
        text: 'Aluno',
        align: 'start',
        sortable: false,
        value: 'student_name',
      },
      { text: 'Empresa', value: 'nome', sortable: false },
      { text: 'Status', value: 'status', sortable: false },
      { text: 'Início', value: 'dataIncial', sortable: false },
      { text: 'Fim', value: 'dataFinall', sortable: false },
      {
        text: 'Plano de atividades',
        value: 'planoAtividades',
        sortable: false,
      },
      { text: 'Relatório', value: 'relatorio', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    desserts: [],
    dessertsEdited: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      alunoId: '',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataIncial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasSemanaisTrabalhadas: '',
      categoria: '',
      modalidade: '',
      planoAtividades: '',
      relatorio: '',
      status: '',
    },
    defaultItem: {
      id: '',
      alunoId: '',
      empresaId: '',
      professorId: '',
      supervisor: '',
      dataIncial: '',
      dataFinal: '',
      remuneracao: '',
      ajuda: '',
      codigoSeguroSaude: '',
      companhiaSeguroSaude: '',
      horasSemanaisTrabalhadas: '',
      categoria: '',
      modalidade: '',
      planoAtividades: '',
      relatorio: '',
      status: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Estágio ' : 'Editar Estágio'
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
      const students = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/alunos/findAll`)

      this.itemsStudents = students.data
    },

    async getCompanies() {
      const companies = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/empresas/findAll`)

      this.itemsCompanies = companies.data
    },

    async getTeachers() {
      const teachers = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/professores/findAll`)

      this.itemsTeachers = teachers.data
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

    async store() {
      try {
        const student = await axios.post(`https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/create`, {
          //  alunoId, empresaId, professorId, supervisor, dataIncial, dataFinal, remuneracao, ajuda, codigoSeguroSaude, companhiaSeguroSaude, horasSemanaisTrabalhadas, categoria, modalidade, planoAtividades, relatorio, status

          alunoId: this.editedItem.alunoId,
          empresaId: this.editedItem.empresaId,
          professorId: this.editedItem.professorId,
          supervisor: this.editedItem.supervisor,
          dataIncial: this.formatDateForISO(this.editedItem.dataIncial),
          dataFinal: this.formatDateForISO(this.editedItem.dataFinal),
          remuneracao: this.editedItem.remuneracao,
          ajuda: this.editedItem.ajuda,
          codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
          companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
          horasTrabalhoSemanais: this.editedItem.horasSemanaisTrabalhadas,
          categoria: this.editedItem.categoria,
          modalidade: this.editedItem.modalidade,
          planoAtividades: 'Pendente',
          relatorios: 'Pendente',
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
        const internship = await axios.put(
          `https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/${id}`,
          {
            alunoId: this.editedItem.alunoId,
            empresaId: this.editedItem.empresaId,
            professorId: this.editedItem.professorId,
            supervisor: this.editedItem.supervisor,
            dataIncial: this.formatDateForISO(this.editedItem.dataIncial),
            dataFinal: this.formatDateForISO(this.editedItem.dataFinal),
            remuneracao: this.editedItem.remuneracao,
            ajuda: this.editedItem.ajuda,
            codigoSeguroSaude: this.editedItem.codigoSeguroSaude,
            companhiaSeguroSaude: this.editedItem.companhiaSeguroSaude,
            horasSemanaisTrabalhadas: this.editedItem.horasSemanaisTrabalhadas,
            categoria: this.editedItem.categoria,
            modalidade: this.editedItem.modalidade,
            planoAtividades: this.editedItem.planoAtividades,
            relatorio: this.editedItem.relatorio,
            status: this.editedItem.status,
          }
        )

        // eslint-disable-next-line no-undef
        console.log(internship)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error(error)
      }
    },
    async destroy(id) {
      await axios.delete(`https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/${id}`)
      this.initialize()
    },

    formatDateForBrazil(e) {
      const initialDate = moment(e.dataIncial).format('DD/MM/YYYY')
      const finalDate = moment(e.dataFinal).format('DD/MM/YYYY')
      e.dataIncial = initialDate

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

    internshipMore(id) {
      this.$router.push(`https://sistema-estagio-back-production.up.railway.app/api/v1//estagios/${id}`)
    },

    async initialize() {
      const internships = await axios.get(`https://sistema-estagio-back-production.up.railway.app/api/v1/estagios/findAll`)

      this.dessertsEdited = internships.data

      this.desserts = this.dessertsEdited.map(this.formatDateForBrazil)
      console.log(this.desserts)

      this.getStudents()
      this.getCompanies()
      this.getTeachers()

      // const str = '2021-12-12T03:00:00.000Z'
      // const date = new Date(str)
      // console.log(format(date, 'dd/MM/yyyy'))
    },

    async printrelatorio(id, alunoId, empresaId) {
      const doc = new jsPDF()

      const internshipEdited = await axios.get(
        `estagios/${id}`
      )
      const internshipAux = internshipEdited.data.map(this.formatDateForBrazil)
      const internship = internshipAux[0]
      console.log(internship, '<Internship>')

      const studentEdited = await axios.get(
        `students/${alunoId}`
      )
      const student = studentEdited.data
      console.log(student, '<Student>')

      const companyEdited = await axios.get(
        `companies/${empresaId}`
      )
      const company = companyEdited.data
      console.log(company, '<Company>')

      const periodEdited = await axios.get(
        `periods/${id}`
      )
      const period = periodEdited.data
      console.log(period, '<Period>')

      // TÍTULO
      doc.setFontSize(30)
      doc.text(45, 20, 'RELATÓRIO DE ESTÁGIO')
      // ESTAGIÁRIO
      doc.setFontSize(16)
      doc.text(20, 40, 'ESTAGIÁRIO')
      doc.setFontSize(12)
      doc.text(20, 50, `Nome: ${student.name}`)
      doc.text(20, 55, `E-mail: ${student.email}`)
      doc.text(20, 60, `Telefone: ${student.phone}`)
      doc.text(20, 65, `CPF: ${student.cpf}`)
      doc.text(20, 70, `Matrícula: ${student.alunoId}`)
      doc.text(20, 75, `Endereço: ${student.address}`)

      // CURSO
      doc.setFontSize(16)
      doc.text(20, 85, 'CURSO')
      doc.setFontSize(12)
      doc.text(20, 95, `${internship.course_name}`)

      // DADOS DO PERÍODO DE ESTÁGIO
      doc.setFontSize(16)
      doc.text(20, 105, 'PERÍODO DE ESTÁGIO')
      doc.setFontSize(12)
      doc.text(20, 115, `Empresa: ${company.name}`)
      doc.text(20, 120, `CNPJ: ${company.empresaId}`)
      doc.text(20, 125, `E-mail: ${company.email}`)
      doc.text(20, 130, `Telefone: ${company.phone}`)
      doc.text(20, 135, `Endereço: ${company.address}`)
      doc.text(20, 140, `Supervisor: ${internship.supervisor}`)
      doc.text(20, 145, `Orientador: ${internship.teacher_name}`)
      doc.text(20, 150, `Data de Início: ${internship.dataIncial}`)
      doc.text(20, 155, `Data de Término: ${internship.dataFinal}`)
      doc.text(20, 160, `Bolsa: R$${internship.remuneracao}`)
      doc.text(20, 165, `Auxílio: R$${internship.ajuda}`)
      doc.text(20, 170, `Seguradora: ${internship.companhiaSeguroSaude}`)
      doc.text(20, 175, `Numero de Seguro: ${internship.codigoSeguroSaude}`)
      doc.text(
        20,
        180,
        `Carga horária Semanal: ${internship.horasSemanaisTrabalhadas} horas`
      )
      doc.text(20, 185, `Categoria: ${internship.categoria}`)
      doc.text(20, 190, `Modalidade: ${internship.modalidade}`)
      doc.text(20, 195, `Status: ${internship.status}`)
      doc.text(20, 200, `Plano de Atividades: ${internship.planoAtividades}`)
      doc.text(20, 205, `Relatório: ${internship.relatorio}`)

      let index = 1
      for (const item of period) {
        console.log(item, 'aqui')

        // RENOVAÇÕES
        doc.addPage()
        doc.setFontSize(30)
        doc.text(35, 20, 'RENOVAÇÕES DE ESTÁGIO')
        doc.setFontSize(16)
        doc.text(20, 40, `${index}ª RENOVAÇÃO DE ESTÁGIO`)

        doc.setFontSize(12)
        doc.text(20, 50, `Empresa: ${item.company_name}`)
        doc.text(20, 55, `CNPJ: ${item.empresaId}`)
        doc.text(20, 60, `E-mail: ${item.company_email}`)
        doc.text(20, 65, `Telefone: ${item.company_phone}`)
        doc.text(20, 70, `Endereço: ${item.company_address}`)
        doc.text(20, 75, `Supervisor: ${item.supervisor}`)
        doc.text(20, 80, `Orientador: ${item.teacher_name}`)
        doc.text(20, 85, `Data de Início: ${item.dataIncial}`)
        doc.text(20, 90, `Data de Término: ${item.dataFinal}`)
        doc.text(20, 95, `Bolsa: R$${item.remuneracao}`)
        doc.text(20, 100, `Auxílio: R$${item.ajuda}`)
        doc.text(20, 105, `Seguradora: ${item.companhiaSeguroSaude}`)
        doc.text(20, 110, `Numero de Seguro: ${item.codigoSeguroSaude}`)
        doc.text(
          20,
          115,
          `Carga horária Semanal: ${item.horasSemanaisTrabalhadas} horas`
        )
        doc.text(20, 120, `Categoria: ${item.categoria}`)
        doc.text(20, 125, `Modalidade: ${item.modalidade}`)
        doc.text(20, 130, `Status: ${item.status}`)
        doc.text(20, 135, `Plano de Atividades: ${item.planoAtividades}`)
        doc.text(20, 140, `Relatório: ${item.relatorio}`)

        index += 1
      }

      // SAVE DOC IN PDF
      doc.save(`https://sistema-estagio-back-production.up.railway.app/api/v1/${student.name}.pdf`)
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
