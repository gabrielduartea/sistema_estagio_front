<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> teste </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie';


export default {
  name: 'IndexPage',
  async created() {
  const token = Cookie.get('token');
  debugger
  await axios.get(`http://localhost:3003/api/v1/auth/${token}`,{token}).then((res) => {
    if (res.data.tipo === 1) {
          this.$router.push('/coordinators')
        } else {
          this.$router.push('/students')
        }
  })
}
}
</script>
