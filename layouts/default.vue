<!-- eslint-disable vue/require-v-for-key -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <br />
      <br />
      <br />
      <v-list>
        <div v-for="(link, i) in links">

          <v-list-item v-if="!link.subLinks" :key="i" :to="link.to" class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-title v-text="link.text" />
          </v-list-item>

          <v-list-group v-else :key="link.text" no-action>
            <template #activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-item v-for="sublink in link.subLinks" :key="sublink.text" :to="sublink.to">
              <v-list-tile-title v-text="sublink.text" />
            </v-list-item>

          </v-list-group>

        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gestagio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="logout()">mdi-logout</v-icon>
    </v-app-bar>

    <v-main>
      <!--  -->
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    drawer: null,
    links: [
      {
        to: '/students',
        icon: 'mdi-account-school',
        text: 'Estudantes',

      },
      {
        icon: 'mdi-book-open-variant',
        text: 'Cursos',
        to: '/courses',
      },
      {
        icon: 'mdi-human-male-board',
        text: 'Professores',
        to: '/teachers',
      },
      {
        icon: 'mdi-google-my-business',
        text: 'Empresas',
        to: '/companies',
      },
      {
        icon: 'mdi-briefcase',
        text: 'Estágios',
        to: '/internships',
      },
      {
        icon: 'mdi-briefcase',
        text: 'Relatórios',
        subLinks: [
          {
            text: 'Estágios',
            to: '/relatorios/relatorio_estagios',
          },
          {
            text: 'Estágios por empresa',
            to: '/relatorios/relatorio_estagios_por_empresa',
          },
          {
            text: 'Estágios por professor',
            to: '/relatorios/relatorio_estagios_por_professor',
          },
          {
            text: 'Número de estagiários por professor',
            to: '/relatorios/numero_estaudantes_por_professor',
          },

        ],
      },
    ],
  }),

  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
