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
    <div v-if="loading" class="loading-page">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
        <span class="span">Carregando</span>
      </div>
    </div>
    <div v-else>
      <v-row>
        <v-col>
          <!-- Dialog edit item alternative -->

          <!-- /Dialog edit item alternative -->

          <v-data-table :headers="headers" :items="desserts" sort-by="name" class="elevation-1">
            <template #item.status="{ item }">
              <v-chip dark :color="getColorStatus(item.status)">
                {{ item.status }}
              </v-chip>
            </template>
            <template #item.dataIncial="{ item }">
              <v-text readonly>{{ formatTabela(item.dataIncial) }}</v-text>
            </template>
            <template #item.dataFinal="{ item }">
              <v-text readonly>{{ formatTabela(item.dataFinal) }}</v-text>
            </template>
            <template #[`item.planoEstagio`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.planoEstagio" style="font-size: 35px;"
                :color="getColorrelatorio(item.planoEstagio)" @click="abrirPdf(item.planoEstagioUrl)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.aceiteOrientador`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.aceiteOrientador" style="font-size: 35px;"
                :color="getColorrelatorio(item.aceiteOrientador)" @click="abrirPdf(item.aceiteOrientadorUrl)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.termoCompromisso`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.termoCompromisso" style="font-size: 35px;"
                :color="getColorrelatorio(item.termoCompromisso)" @click="abrirPdf(item.termoCompromissoUrl)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.relatorio`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.relatorio" style="font-size: 35px;"
                :color="getColorrelatorio(item.relatorio)" @click="abrirPdf(item.relatorioUrl)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.relatorio1`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.relatorio1" style="font-size: 35px;"
                :color="getColorrelatorio(item.relatorio1)" @click="abrirPdf(item.relatorio1Url)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.relatorio2`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.relatorio2" style="font-size: 35px;"
                :color="getColorrelatorio(item.relatorio2)" @click="abrirPdf(item.relatorio2Url)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.relatorio3`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.relatorio3" style="font-size: 35px;"
                :color="getColorrelatorio(item.relatorio3)" @click="abrirPdf(item.relatorio3Url)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>
            <template #[`item.rescisao`]="{ item }">
              <v-icon small class="mr-3" :disabled="!item.rescisao" style="font-size: 35px;"
                :color="getColorrelatorio(item.rescisao)" @click="abrirPdf(item.rescisaoUrl)">
                mdi-file-document-arrow-right
              </v-icon>
            </template>

            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Documentos Estágio</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <!-- dialog -->
                <v-dialog v-model="dialog" max-width="900px">
                  <template v-slot:activator="{ on, attrs }">

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
                            <v-autocomplete :rules="[rules.required]" v-model="editedItem.estudanteId" label="Estudante"
                              :items="itemsStudents" item-value="id" item-text="nome"></v-autocomplete>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-autocomplete :rules="[rules.required]" v-model="editedItem.empresaId"
                              @change="getSupervisores()" label="Empresa" :items="itemsCompanies" item-text="nome"
                              item-value="id"></v-autocomplete>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40"
                              transition="scale-transition" offset-y min-width="auto">
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dataInicial" label="Data Inicial" prepend-icon="mdi-calendar"
                                  readonly v-bind="attrs" v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="editedItem.dataIncial" @change="formatDateForBrazil(editedItem)"
                                @input="menu1 = false" locale="pt-br"></v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                              transition="scale-transition" offset-y min-width="auto">
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dataFinal" label="Data Final" prepend-icon="mdi-calendar" readonly
                                  v-bind="attrs" v-on="on"></v-text-field>
                              </template>
                              <v-date-picker v-model="editedItem.dataFinal" @change="formatDateForBrazil(editedItem)"
                                @input="menu2 = false" locale="pt-br"></v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-select :rules="[rules.required]" v-model="editedItem.status" :items="itemsStatus"
                              label="Status"></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="termoCompromisso" accept=".pdf" label="Termo de aceite"
                              @change="verificaDelete(termoCompromisso, 'termoCompromisso')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="planoEstagio" accept=".pdf" label="Plano de estágio"
                              @change="verificaDelete(planoEstagio, 'planoEstagio')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="aceiteOrientador" accept=".pdf" label="Aceite do orientador"
                              @change="verificaDelete(aceiteOrientador, 'aceiteOrientador')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="relatorio" accept=".pdf" label="Relatório 1"
                              @change="verificaDelete(relatorio, 'relatorio')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="relatorio1" accept=".pdf" label="Relatório 2"
                              @change="verificaDelete(relatorio1, 'relatorio1')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="relatorio2" accept=".pdf" label="Relatório 3"
                              @change="verificaDelete(relatorio2, 'relatorio2')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="relatorio3" accept=".pdf" label="Relatório 4"
                              @change="verificaDelete(relatorio3, 'relatorio3')"></v-file-input>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-file-input v-model="rescisao" accept=".pdf" label="Rescisão"
                              @change="verificaDelete(rescisao, 'rescisao')"></v-file-input>
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
            </template>

            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import jsPDF from 'jspdf'
import { VMoney } from 'v-money'
import { S3 } from 'aws-sdk'
import baseURL from '../../../../api'


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
    menu1: false,
    loading: false,
    axio: null,
    menu2: false,
    dialog: false,
    deleteKeys: [],
    dialogDelete: false,
    dialogAlternative: false,
    itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado'],
    itemsStudents: [],
    itemsCompanies: [],
    itemsTeachers: [],
    itemsSupervisores: [],
    objForm: {},
    pdfs: {
      relatorio: null,
      planoEstagio: null,
      termoCompromisso: null,
      aceiteOrientador: null,
      relatorio1: null,
      relatorio2: null,
      relatorio3: null,
    },
    relatorio: null,
    planoEstagio: null,
    termoCompromisso: null,
    aceiteOrientador: null,
    relatorio1: null,
    relatorio2: null,
    relatorio3: null,
    headers: [
      {
        text: 'Estudante',
        align: 'start',
        sortable: false,
        value: 'estudante[0].nome',
      },
      { text: 'Status', value: 'status', sortable: false },
      { text: 'Termo Compromisso', value: 'termoCompromisso', sortable: false },
      { text: 'Plano estagio', value: 'planoEstagio', sortable: false },
      { text: 'Aceite orientador', value: 'aceiteOrientador', sortable: false },
      { text: 'Relatório 1', value: 'relatorio', sortable: false },
      { text: 'Relatório 2', value: 'relatorio1', sortable: false },
      { text: 'Relatório 3', value: 'relatorio2', sortable: false },
      { text: 'Relatório 4', value: 'relatorio3', sortable: false },
      { text: 'Rescisão', value: 'rescisao', sortable: false },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    desserts: [],
    dessertsEdited: [],
    editedIndex: -1,
    estudanteId: null,
    dataInicial: null,
    dataFinal: null,
    editedItem: {
      id: '',
      estudanteId: '',
      empresaId: '',
      dataIncial: moment().format('YYYY-MM-DD'),
      dataFinal: moment().format('YYYY-MM-DD'),
      relatorio: '',
      status: '',
      planoEstagio: null,
      termoCompromisso: null,
      aceiteOrientador: null,
      termoCompromissoUrl: '',
      planoEstagioUrl: '',
      relatorioUrl: '',
      aceiteOrientadorUrl: '',
      relatorio1: null,
      relatorio2: null,
      relatorio3: null,
      relatorio1Url: null,
      relatorio2Url: null,
      relatorio3Url: null,
      rescisao: null,
      rescisaoUrl: null
    },
    defaultItem: {
      id: '',
      estudanteId: '',
      empresaId: '',
      dataIncial: moment().format('YYYY-MM-DD'),
      dataFinal: moment().format('YYYY-MM-DD'),
      relatorio: '',
      status: '',
      planoEstagio: null,
      termoCompromisso: null,
      aceiteOrientador: null,
      termoCompromissoUrl: '',
      planoEstagioUrl: '',
      relatorioUrl: '',
      aceiteOrientadorUrl: '',
      relatorio1: null,
      relatorio2: null,
      relatorio3: null,
      relatorio1Url: null,
      relatorio2Url: null,
      relatorio3Url: null,
      rescisao: null,
      rescisaoUrl: null
    },
    disabled: true,
  }),
  directives: { money: VMoney },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Gerir Documentos' : 'Documentos'
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

      this.itemsStudents = students.data
    },

    async getCompanies() {
      const companies = await axios.get(`${baseURL}empresas/findAll`)

      this.itemsCompanies = companies.data
    },

    async getTeachers() {
      const teachers = await axios.get(`${baseURL}professores/findAll`)

      this.itemsTeachers = teachers.data
    },
    async getSupervisores(item = null) {
      const supervisores = await axios.get(`${baseURL}supervisores/findAllEmpresa/${item != null ? item : this.editedItem.empresaId}`)
      this.itemsSupervisores = supervisores.data;
      this.disabled = false;

    },

    getColorStatus(statusColor) {
      if (statusColor === 'Em andamento') return 'orange'
      else if (statusColor === 'Finalizado') return 'green'
      else return 'red'
    },

    getColorActivitiesPlan(statusColor) {
      if (!statusColor) return 'red'
      else return 'green'
    },

    getColorrelatorio(statusColor) {
      if (statusColor) return 'green'
    },

    async salvar(objForm, id = null) {
      debugger
      try {
          await axios.put(
            `${baseURL}estagios/${id}`, objForm)
        this.editedItem = Object.assign({}, this.defaultItem)
        this.initialize()
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.log(error)
      }
    },

    async update(id) {
      try {
        // eslint-disable-next-line no-undef
        console.log(this.editedItem.relatorio);
        debugger
        const reader = new FileReader();
        reader.readAsText(this.planoEstagio);
        await this.verificaUploadPdf()
        const internship = await axios.put(
          `${baseURL}estagios/${id}`,
          {
            planoEstagio: this.editedItem.planoEstagio,
            termoCompromisso: this.editedItem.termoCompromisso,
            aceiteOrientador: this.editedItem.aceiteOrientador,
            relatorio: this.editedItem.relatorio,
            termoCompromissoUrl: this.editedItem.termoCompromissoUrl,
            planoEstagioUrl: this.editedItem.planoEstagioUrl,
            relatorioUrl: this.editedItem.relatorioUrl,
            aceiteOrientadorUrl: this.editedItem.aceiteOrientadorUrl,
            relatorio1: this.editedItem.relatorio1,
            relatorio2: this.editedItem.relatorio2,
            relatorio3: this.editedItem.relatorio3,
            relatorio1Url: this.editedItem.relatorio1Url,
            relatorio2Url: this.editedItem.relatorio2Url,
            relatorio3Url: this.editedItem.relatorio3Url,
            rescisao: this.editedItem.rescisao,
            rescisaoUrl:this.editedItem.rescisaoUrl,
          },
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
      await axios.delete(`${baseURL}estagios/${id}`, { files: this.relatorio })
      this.initialize()
    },

    formatDateForBrazil(e) {
      const initialDate = moment(e.dataIncial).format('YYYY-MM-DD')
      const finalDate = moment(e.dataFinal).format('YYYY-MM-DD')
      this.dataFinal = moment(e.dataFinal).format('DD/MM/YYYY')
      this.dataInicial = moment(e.dataIncial).format('DD/MM/YYYY')
      e.dataIncial = initialDate

      e.dataFinal = finalDate

      return e
    },
    formatTabela(data) {
      return moment(data).format("DD/MM/YYYY")
    },
    // BD ESTÁ RECEBENDO YYYY-MM-DD
    formatDateForISO(str) {
      const date = new Date(str)
      debugger
      return date
    },
    async initialize() {
      debugger
      this.axio = axios.create({ baseURL })
      debugger
      const internships = await this.axio.get(`estagios/findAllEstagio/${this.$route.params.id}`)

      this.dessertsEdited = internships.data

      this.desserts = this.dessertsEdited.map(this.formatDateForBrazil)
      const teste = this.desserts;
      debugger
      console.log(this.desserts)

      this.getStudents();
      this.getCompanies();
      this.getTeachers();
      this.disabled = true;
      this.loading = false;
      // const str = '2021-12-12T03:00:00.000Z'
      // const date = new Date(str)
      // console.log(format(date, 'dd/MM/yyyy'))
    },

    async printrelatorio(id, estudanteId, empresaId) {
      debugger
      const doc = new jsPDF()

      const internshipEdited = await axios.get(
        `${baseURL}estagios/${id}`
      )
      debugger
      const internship = internshipEdited.data


      const supervisores = await axios.get(
        `${baseURL}supervisores/${internship.supervisorId}`
      )

      const professores = await axios.get(
        `${baseURL}professores/${internship.professorId}/findOne`
      )

      const studentEdited = await axios.get(
        `${baseURL}estudantes/${estudanteId}`
      )
      const student = studentEdited.data


      const cursos = await axios.get(
        `${baseURL}cursos/${student.cursoId}`
      )
      console.log(student, '<Student>')

      const companyEdited = await axios.get(
        `${baseURL}empresas/${empresaId}`
      )
      const company = companyEdited.data
      console.log(company, '<Company>')

      debugger
      // TÍTULO
      doc.setFontSize(30)
      doc.text(45, 20, 'RELATÓRIO DE ESTÁGIO')
      // ESTAGIÁRIO
      doc.setFontSize(16)
      doc.text(20, 40, 'ESTAGIÁRIO')
      doc.setFontSize(12)
      doc.text(20, 50, `Nome: ${student.nome}`)
      doc.text(20, 55, `E-mail: ${student.email}`)
      doc.text(20, 60, `Telefone: ${student.telefone}`)
      doc.text(20, 65, `CPF: ${student.cpf}`)
      doc.text(20, 70, `Matrícula: ${student.matricula}`)
      doc.text(20, 75, `Endereço: ${student.endereco}`)

      // CURSO
      doc.setFontSize(16)
      doc.text(20, 85, 'CURSO')
      doc.setFontSize(12)
      doc.text(20, 95, `${cursos.data.nome}`)

      // DADOS DO PERÍODO DE ESTÁGIO
      doc.setFontSize(16)
      doc.text(20, 105, 'PERÍODO DE ESTÁGIO')
      doc.setFontSize(12)
      doc.text(20, 115, `Empresa: ${company.nome}`)
      doc.text(20, 120, `CNPJ: ${company.cnpj}`)
      doc.text(20, 125, `E-mail: ${company.email}`)
      doc.text(20, 130, `Telefone: ${company.telefone}`)
      doc.text(20, 135, `Endereço: ${company.endereco}`)
      doc.text(20, 140, `Supervisor: ${supervisores.data.nome}`)
      doc.text(20, 145, `Orientador: ${professores.data.nome}`)
      doc.text(20, 150, `Data de Início: ${moment(internship.dataInicial).format('DD/MM/YYYY')}`)
      doc.text(20, 155, `Data de Término: ${moment(internship.dataFinal).format('DD/MM/YYYY')}`)
      doc.text(20, 160, `Bolsa: R$${internship.remuneracao}`)
      doc.text(20, 165, `Auxílio: R$${internship.ajuda}`)
      doc.text(20, 170, `Seguradora: ${internship.companhiaSeguroSaude}`)
      doc.text(20, 175, `Numero de Seguro: ${internship.codigoSeguroSaude}`)
      doc.text(
        20,
        180,
        `Carga horária Semanal: ${internship.horasTrabalhoSemanais} horas`
      )
      doc.text(20, 185, `Categoria: ${internship.categoria}`)
      doc.text(20, 190, `Modalidade: ${internship.modalidade}`)
      doc.text(20, 195, `Status: ${internship.status}`)
      doc.text(20, 205, `Relatório: ${internship.relatorio}`)
      doc.save(`${baseURL}${student.name}.pdf`)
    },

    async editItem(item) {
      debugger
      await this.pesquisarDowload(item);
      this.getSupervisores(item.empresaId)
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
    async pesquisarDowload(item) {
      debugger
      this.loading = true;
      if (item.relatorio) {
        this.relatorio = await this.downloadPdf(item.relatorio);

      }
      if (item.termoCompromisso) {
        this.termoCompromisso = await this.downloadPdf(item.termoCompromisso);
      }
      if (item.aceiteOrientador) {
        this.aceiteOrientador = await this.downloadPdf(item.aceiteOrientador);
      }
      if (item.planoEstagio) {
        this.planoEstagio = await this.downloadPdf(item.planoEstagio);
      }
      if (item.relatorio1) {
        this.relatorio1 = await this.downloadPdf(item.relatorio1);
      }
      if (item.relatorio2) {
        this.relatorio2 = await this.downloadPdf(item.relatorio2);
      }
      if (item.relatorio3) {
        this.relatorio3 = await this.downloadPdf(item.relatorio3);
      }
      if (item.rescisao) {
        this.rescisao = await this.downloadPdf(item.rescisao);
      }
      this.loading = false;
    },
    async downloadPdf(key) {
      debugger
      const AWS_S3_BUCKET = 'gestagio-s3';
      const s3 = new S3({
        accessKeyId: 'AKIASTCFU5KKFJSXYYGG',
        secretAccessKey: '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',
      });
      const file = await s3.getObject({ Bucket: AWS_S3_BUCKET, Key: key }).promise()
      debugger
      const teste = new File([new Uint8Array(file.Body)], key)
      return teste
    },

    close() {
      this.dialog = false
      this.disabled = true
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.relatorio = null
        this.planoEstagio = null
        this.termoCompromisso = null
        this.aceiteOrientador = null
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

    async save() {
        await this.executarDelete();
        this.store(this.editedItem.id)
      this.close()
    },

    async store(id = null) {
      this.estudanteId = this.editedItem.estudanteId;
      this.loading = true;

      this.objForm = {
        planoEstagio: this.editedItem.planoEstagio,
        termoCompromisso: this.editedItem.termoCompromisso,
        aceiteOrientador: this.editedItem.aceiteOrientador,
        relatorio: this.editedItem.relatorio,
        termoCompromissoUrl: this.editedItem.termoCompromissoUrl,
        planoEstagioUrl: this.editedItem.planoEstagioUrl,
        relatorioUrl: this.editedItem.relatorioUrl,
        aceiteOrientadorUrl: this.editedItem.aceiteOrientadorUrl,
        relatorio1: this.editedItem.relatorio1,
        relatorio2: this.editedItem.relatorio2,
        relatorio3: this.editedItem.relatorio3,
        relatorio1Url: this.editedItem.relatorio1Url,
        relatorio2Url: this.editedItem.relatorio2Url,
        relatorio3Url: this.editedItem.relatorio3Url,
        rescisao: this.editedItem.rescisao,
        rescisaoUrl: this.editedItem.rescisaoUrl,

      }
      const files = []
      this.estudanteId = this.editedItem.estudanteId
      if (this.relatorio && this.relatorio.name !== this.editedItem.relatorio) {
        const pdf = {
          arquivo: this.relatorio,
          tipo: 'relatorio'
        }
        files.push(pdf)
      }
      if (this.termoCompromisso && this.termoCompromisso.name !== this.editedItem.termoCompromisso) {
        const pdf = {
          arquivo: this.termoCompromisso,
          tipo: 'termoCompromisso'
        }
        files.push(pdf)
      }
      if (this.planoEstagio && this.planoEstagio.name !== this.editedItem.planoEstagio) {
        const pdf = {
          arquivo: this.planoEstagio,
          tipo: 'planoEstagio'
        }
        files.push(pdf)
      }
      if (this.aceiteOrientador && this.aceiteOrientador !== this.editedItem.aceiteOrientador) {
        const pdf = {
          arquivo: this.aceiteOrientador,
          tipo: 'aceiteOrientador'
        }
        files.push(pdf)
      }
      if (this.relatorio1 && this.relatorio1.name !== this.editedItem.relatorio1) {
        const pdf = {
          arquivo: this.relatorio1,
          tipo: 'relatorio1'
        }
        files.push(pdf)
      }
      if (this.relatorio2 && this.relatorio2.name !== this.editedItem.relatorio2) {
        const pdf = {
          arquivo: this.relatorio2,
          tipo: 'relatorio2'
        }
        files.push(pdf)
      }
      if (this.relatorio3 && this.relatorio3.name !== this.editedItem.relatorio3) {
        const pdf = {
          arquivo: this.relatorio3,
          tipo: 'relatorio3'
        }
        files.push(pdf)
      }
      if (this.rescisao && this.rescisao.name !== this.editedItem.rescisao) {
        const pdf = {
          arquivo: this.rescisao,
          tipo: 'rescisao'
        }
        files.push(pdf)
      }
      const AWS_S3_BUCKET = 'gestagio-s3';
      const s3 = new S3({
        accessKeyId: 'AKIASTCFU5KKFJSXYYGG',
        secretAccessKey: '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',
      });
      const index = files.length - 1
      if (files.length === 0) {
        await this.salvar(this.objForm, this.$route.params.id);
      }
      for (const file of files) {
        const key = `${file.tipo}/${this.estudanteId}-` + file.arquivo.name
        const tipoUrl = file.tipo + `Url`
        const params = {
          Bucket: AWS_S3_BUCKET,
          Key: key,
          Body: file.arquivo,
          ACL: 'public-read',
          ContentType: file.arquivo.type,
          ContentDisposition: 'inline',
          CreateBucketConfiguration: {
            LocationConstraint: 'us-east-1',
          }
        }
        await s3.upload(params).promise().then(res => {
          if (res) {
            debugger
            this.objForm[file.tipo] = key
            this.objForm[tipoUrl] = res.Location
            debugger
            if (files.indexOf(file) === index) {
              this.loading = false;
              this.salvar(this.objForm, id);
            } else {
              return key
            }
          }
        });
      }
    },
    async uploadoPdf(file, tipo) {
      debugger
      const AWS_S3_BUCKET = 'gestagio-s3';
      const s3 = new S3({
        accessKeyId: 'AKIASTCFU5KKFJSXYYGG',
        secretAccessKey: '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',
      });
      const key = `${this.editedItem.estudanteId}-` + file.name
      const params = {
        Bucket: AWS_S3_BUCKET,
        Key: key,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type,
        ContentDisposition: 'inline',
        CreateBucketConfiguration: {
          LocationConstraint: 'us-east-1',
        },
      }
      try {
        await s3.upload(params).promise().then(res => {
          if (res) {
            debugger
            const tipoUrl = `${tipo}Url-${this.estudanteId}`
            this.editedItem[tipo] = key
            this.editedItem[tipoUrl] = res.url
            debugger
            return key
          }
        });
      } catch (erro) {
        // eslint-disable-next-line no-undef
        console.log(erro);
      }
    },
    abrirPdf(url) {
      window.open(url, '_blank', 'noreferrer');
    },
    verificaDelete(item, campo) {
      debugger
      if (!item && this.editedItem[campo]) {
        debugger
        this.deleteKeys.push(this.editedItem[campo])
        this.editedItem[campo] = null
        this.editedItem[`${campo}Url`] = null
      }
    },
    async executarDelete() {
      if (this.deleteKeys.length > 0) {
        const AWS_S3_BUCKET = 'gestagio-s3';
        for (const key of this.deleteKeys) {
          const s3 = new S3({
            accessKeyId: 'AKIASTCFU5KKFJSXYYGG',
            secretAccessKey: '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',
          });
          await s3.deleteObject({
            Bucket: AWS_S3_BUCKET,
            Key: key,

          }).promise()
        }
      }
    }
  },
}

</script>
<style scoped>
.spinner {
  width: 50px;
  height: 50px;
  top: 250px;
  position: relative;
  margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}


@-webkit-keyframes sk-bounce {

  0%,
  100% {
    -webkit-transform: scale(0.0)
  }

  50% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes sk-bounce {

  0%,
  100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.span {
  top: 58px;
  position: relative;
  right: 15px;
}
</style>
