/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="login.email" name="login" label="Usuário" type="text"></v-text-field>
                  <v-text-field v-model="login.password" name="password" label="Senha" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="loginUser()">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import Cookie from 'js-cookie';

export default {
  layout: 'emptyPage',
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    async loginUser() {
      debugger
      await axios.post('https://sistema-estagio-back-production.up.railway.app/api/v1/auth/login', { data: this.login }, {
        headers: 'Access-Control-Allow-Origin: *'
      })
        .then((res) => {
          // eslint-disable-next-line no-undef
          Cookie.set('my_token',res.data.access_token)
          debugger
          if (res.data.user.tipo === 1) {
            this.$router.push('/coordinators')
          } else {
            this.$router.push('/students')
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-undef
          console.log('erro!!!')
          // eslint-disable-next-line no-console, no-undef
          console.log(error.response.status)
          if (error.response.status === 401) {
            this.$router.push('/loginError')
          }
        })
    },
  },
}
</script>

<style>

</style>
