<!-- eslint-disable no-undef -->
<template>
    <v-container>

        <v-col>
            <h1 class="title">Relatório do número de estagiários por professor</h1>
        </v-col>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-select v-model="editedItem.status" :items="itemsStatus" label="Status"></v-select>
                    </v-col>
                </v-row>
                <v-btn color="primary" dark class="mb-2" @click="gerarRelatorio()">
                    Gerar relatório
                </v-btn>
            </v-container>
        </v-card-text>
    </v-container>
</template>
  
<script>
import axios from 'axios'
import jsPDF from 'jspdf';
import baseURL from '../../api';
import 'jspdf-autotable';
export default {
    data: () => ({
        itemsStatus: ['Em andamento', 'Finalizado', 'Cancelado', 'Todos'],
        itemsTeachers: [],
        heading: "Número de estudantes por professor orientador",
        editedItem: {
            status: ''
        }
    }),

    created() {
    },

    methods: {

        async gerarRelatorio() {
            try {
                const dadosRelatorio = (await axios.get(`${baseURL}professores/relatorioNumeroEstagiarios/${this.editedItem.status}`,)).data
                debugger
                const items=[]
                for (const dados of dadosRelatorio){
                    items.push({
                        professor: dados.nome, numero:dados.count
                    })
                }
                debugger
                const columns = [{ title: "Professor", dataKey: "professor" }, { title: "Número de orientandos", dataKey: "numero" }]
                // eslint-disable-next-line new-cap
                const doc = new jsPDF({
                    orientation: "portrait",
                    unit: "in",
                    format: "letter"
                });
                // let posicaoLinha = 60;

                // TÍTULO
                debugger
                doc.setFontSize(16).text(this.heading, 0.5, 1.0);
                // create a line under heading 
                doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
                // Using autoTable plugin
                doc.autoTable({
                    columns,
                    body: items,
                    margin: { left: 0.5, top: 1.25 }
                });

                // Creating footer and saving file
                doc.save(`${this.heading}.pdf`);
            } catch (error) {
                // eslint-disable-next-line no-undef
                console.log(error)
            }
        },
    },
}
</script>
  