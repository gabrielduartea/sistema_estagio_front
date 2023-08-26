<!-- eslint-disable no-undef -->
<template>
    <v-container>

        <v-col>
            <h1 class="title">Relatório de estágios por professor</h1>
        </v-col>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-autocomplete v-model="editedItem.professorId" label="Orientador" :items="itemsTeachers"
                            item-text="nome" item-value="id"></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                        <v-select v-model="editedItem.status" :items="itemsStatus" label="Status"></v-select>
                    </v-col>

                    <v-btn color="primary" dark class="mb-2" @click="gerarRelatorio()">
                        Gerar relatório
                    </v-btn>

                </v-row>
            </v-container>
        </v-card-text>
    </v-container>
</template>
  
<script>
import axios from 'axios'
import jsPDF from 'jspdf';
import baseURL from '../../api';
import moment from 'moment';
import 'jspdf-autotable';

export default {
    data: () => ({
        itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado', 'Todos'],
        itemsTeachers: [],
        editedItem: {
            status: '',
            professorId: null
        },
        heading: "Estágios por professores",
    }),

    created() {
        this.initialize()
    },

    methods: {
        async getCourses() {
            const courses = await axios.get(`${baseURL}cursos/findAll`)
            debugger
            this.itemsCourses = courses.data
        },


        async gerarRelatorios() {
            try {
                const dadosRelatorio = await axios.get(`${baseURL}estagios/relatorioEstagiosPorProfessor/${JSON.stringify(this.editedItem)}`)

                debugger
                // eslint-disable-next-line new-cap
                const doc = new jsPDF()

                // TÍTULO
                debugger
                doc.addPage();
                doc.setPage(1);
                doc.setFontSize(30)
                doc.text(25, 20, 'Número de estagiários por professor')
                doc.setFontSize(12)
                doc.text(20, 40, 'Professores')
                doc.text(100, 40, 'Número de orientandos')
                // for (const dados of dadosRelatorio.data) {
                //     doc.setFontSize(12)
                //     doc.text(20, posicaoLinha, `${dados.nome}`)
                //     doc.text(125, posicaoLinha, `${dados.count}`)
                //     posicaoLinha = posicaoLinha + 10;
                // }
                doc.save(`estagios_por_professor.pdf`)
                // eslint-disable-next-line no-undef
                console.log(dadosRelatorio)
                this.initialize()
            } catch (error) {
                // eslint-disable-next-line no-undef
                console.log(error)
            }
        },
        async getTeachers() {
            const teachers = await axios.get(`${baseURL}professores/findAll`)

            this.itemsTeachers = teachers.data
        },

        async initialize() {
            await this.getTeachers();
        },

        async gerarRelatorio() {
            debugger
            const infoRelatorio = []
            const dadosRelatorio = (await axios.get(`${baseURL}estagios/relatorioEstagiosPorProfessor/${JSON.stringify(this.editedItem)}`)).data
            for (const dados of dadosRelatorio) {
                infoRelatorio.push({
                    estudantes: dados.estudante,
                    matricula: dados.matricula,
                    empresa: dados.empresa,
                    supervisor: dados.supervisor,
                    periodo: `${moment(dados.data_inicial).format('DD/MM/YYYY')} até ${moment(dados.data_final).format('DD/MM/YYYY')}`
                })
            }
            const columns = [
                { title: "Estudante", dataKey: "estudantes" },
                { title: "Matrícula", dataKey: "matricula" },
                { title: "Empresa", dataKey: "empresa" },
                { title: "Supervisor", dataKey: "supervisor" },
                { title: "Período de estagio", dataKey: "periodo" }
            ];
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "in",
                format: "letter"
            });
            // text is placed using x, y coordinates
            doc.setFontSize(16).text(this.heading, 0.5, 1.0);
            // create a line under heading 
            doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
            doc.setFontSize(13).text(`Empresa: ${dadosRelatorio[0].professor}`, 0.5, 1.3);
            doc.setFontSize(13).text(`Status: ${this.editedItem.status}`, 3.5, 1.3);
            // Using autoTable plugin
            doc.autoTable({
                columns,
                body: infoRelatorio,
                margin: { left: 0.5, top: 1.40 }
            });
            // Creating footer and saving file
            doc.save(`${this.heading}.pdf`);
        }

    },
}
</script>
  