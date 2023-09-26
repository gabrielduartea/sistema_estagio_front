

import axios from "axios";
import baseURL from "../api";

    export default async ({store,route,redirect})=>{
        // eslint-disable-next-line no-undef
          console.log(store.$auth.options)
        await axios.get(`${baseURL}auth/autenticacao`).then((resposta)=>{
          
          if (!resposta.data || resposta.data.tipo === 1) {
            redirect('/login')
              }
        }).catch((error) => {
              if (error.response.status === 401) {
                return redirect('/login')
              }
            })
      }