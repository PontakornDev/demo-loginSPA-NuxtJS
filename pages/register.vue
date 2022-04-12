<template>
  <FormContainer>
    <div slot="formData">
      <h3 class="text-2xl font-bold text-center">
        Register
      </h3>
      <ValidationObserver slim>
        <form @submit.prevent="onSubmit">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email<label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
              </label></label>
            </div>
            <ValidationProvider v-slot="{ errors }" rules="required|password:@confirm">
              <div class="mt-4">
                <label class="block">Password<label>
                  <input
                    v-model="data.password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    @keyup="checkStatusBtn(errors[0])"
                  >
                </label></label>
              </div>
              <div class="mt-4">
                <label class="block">Confirm Password<label>
                  <ValidationProvider name="confirm" rules="required">
                    <input
                      v-model="data.confirmation"
                      type="password"
                      placeholder="Confirm Password"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      @keyup="checkStatusBtn(errors[0])"
                    >
                  </ValidationProvider>
                </label></label>
              </div>
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <v-card-actions class="flex items-baseline justify-center pt-6">
              <v-btn :disabled="data.statusBtn" type="submit" class="w-full bg-blue-600 hover:bg-blue-900 text-white">
                {{ 'Confirm' }}
              </v-btn>
            </v-card-actions>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </FormContainer>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import FormContainer from '~/components/containers/FormContainers.vue'

extend('required', required)
extend('password', {
  params: ['target'],
  validate (value: string, { target }) {
    if (value === target) {
      return true
    } else {
      return false
    }
  },
  message: 'Password confirmation does not match'
})

export default defineComponent({
  components: {
    FormContainer,
    ValidationObserver,
    ValidationProvider
  },
  setup () {
    const data = reactive({
      password: '',
      confirmation: '',
      statusBtn: true
    })

    const checkStatusBtn = (message: string) => {
      if (message !== 'Password confirmation does not match') {
        data.statusBtn = false
      } else {
        data.statusBtn = true
      }
    }

    const onSubmit = () => {
      console.log('Submit')
    }
    return { onSubmit, data, checkStatusBtn }
  }
})
</script>
