<template>
  <div>
    <div class="flex justify-center pt-6">
      <span><b>611998030</b></span>
    </div>
    <div class="flex justify-center pt-6">
      <v-btn text class="w-60 bg-blue-600 hover:bg-blue-900 text-white" @click="logOut">
        Logout
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth',
  setup () {
    const { $auth }: any = useContext()
    const router = useRouter()

    const logOut = async () => {
      await $auth.logout()
      await router.push('/login')
    }
    return { logOut }
  }
})
</script>
