<template>
  <FormContainer>
    <div slot="formData">
      <h3 class="text-2xl font-bold text-center">
        Register
      </h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email<label>
              <input
                type="text"
                placeholder="Email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <div class="mt-4">
            <label class="block">Password<label>
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <div class="mt-4">
            <label class="block">Confirm Password<label>
              <input
                type="password"
                placeholder="Confirm Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
            </label></label>
          </div>
          <v-card-actions class="flex items-baseline justify-center pt-6">
            <v-btn type="submit" class="w-full bg-blue-600 hover:bg-blue-900 text-white">
              {{ 'Confirm' }}
            </v-btn>
          </v-card-actions>
        </div>
      </form>
    </div>
  </FormContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import FormContainer from '~/components/containers/FormContainers.vue'

export default defineComponent({
  components: {
    FormContainer
  },
  setup () {

  }
})
</script>
