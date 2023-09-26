<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> teste </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie';
import baseURL from '../api';


export default {
  name: 'IndexPage',
  async created() {
  const token = Cookie.get('token');
  debugger
  await axios.get(`${baseURL}auth/token/${token}`,{token}).then((res) => {
    debugger
    if (res.data.tipo === 0) {
          this.$router.push('/coordinators')
        } else {
          this.$router.push('/students')
        }
  })
}
}
</script>
