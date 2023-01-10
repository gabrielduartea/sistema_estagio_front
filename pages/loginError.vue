<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <v-layout align-center justify-center flex-column>
          <h1>Usuário ou senha inválidos, tente novamente!</h1>
          <div d-flex justify-center>
            <img src="../static/error.png" alt="" />
          </div>
          <div>
            <v-btn color="primary" dark to="/login"> Tentar Novamente</v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'EmptyLayout',
  layout: 'emptyPage',
}
</script>
