<template>
  <FormContainer>
    <div slot="formData">
      <h3 class="text-2xl font-bold text-center">
        Login to your account
      </h3>
      <form @submit.prevent="onSubmit">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email/Username<label>
              <input
                v-model="data.email"
                type="text"
                placeholder="Email or Username"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <div class="mt-4">
            <label class="block">Password<label>
              <input
                v-model="data.password"
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <v-card-actions class="flex items-baseline justify-center pt-6">
            <v-btn type="submit" class="w-full bg-blue-600 hover:bg-blue-900 text-white">
              {{ 'Login' }}
            </v-btn>
          </v-card-actions>
          <v-card-actions class="flex items-baseline justify-center">
            <Button
              title="Register"
              button-color="w-full bg-lime-600 hover:bg-lime-900"
              path="/register"
            />
          </v-card-actions>
        </div>
      </form>
    </div>
  </FormContainer>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import FormContainer from '~/components/containers/FormContainers.vue'
import Button from '~/components/button/Button.vue'

export default defineComponent({
  components: {
    FormContainer,
    Button
  },
  setup () {
    const data = reactive({
      email: '',
      password: ''
    })
    const onSubmit = () => {
      console.log(data.email)
      console.log(data.password)
    }
    return { onSubmit, data }
  }
})
</script>
