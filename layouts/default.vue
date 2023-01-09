<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <br />
      <br />
      <br />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
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
    items: [
      {
        icon: 'mdi-account-school',
        title: 'Estudantes',
        to: '/students',
      },
      {
        icon: 'mdi-book-open-variant',
        title: 'Cursos',
        to: '/courses',
      },
      {
        icon: 'mdi-human-male-board',
        title: 'Professores',
        to: '/teachers',
      },
      {
        icon: 'mdi-google-my-business',
        title: 'Empresas',
        to: '/companies',
      },
      {
        icon: 'mdi-briefcase',
        title: 'Estágios',
        to: '/internships',
      },
    ],
  }),

  methods: {
    logout() {
      this.$router.push(`/login`)
    },
  },
}
</script>
