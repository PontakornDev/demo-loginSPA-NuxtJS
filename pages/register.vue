<template>
  <div>
    <FormContainer>
      <div slot="formData">
        <h3 class="text-2xl font-bold text-center">
          Register
        </h3>
        <ValidationObserver slim>
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
              <ValidationProvider v-slot="{ errors }" rules="required|password:@confirm">
                <div class="mt-4">
                  <label class="block">Password<label>
                    <input
                      v-model="data.password"
                      :type="data.typePassword"
                      placeholder="Password"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      @keyup="checkStatusBtn(errors)"
                    >
                  </label></label>
                </div>
                <div class="mt-4">
                  <label class="block">Confirm Password<label>
                    <ValidationProvider name="confirm" rules="required">
                      <input
                        v-model="data.confirmation"
                        :type="data.typePassword"
                        placeholder="Confirm Password"
                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        @keyup="checkStatusBtn(errors)"
                      >
                    </ValidationProvider>
                  </label></label>
                  <ShowPassword :lable="data.checkBoxText" @showPassword="showPassword" />
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
    <SnackBar :title="data.snackbarText" :value="data.snackbarStatus" :image="data.imageSnackbarURL" data-app />
    <PageLoding :value="data.pageLoadingStatus" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext, useRouter } from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import FormContainer from '~/components/containers/FormContainers.vue'
import PageLoding from '~/components/PageLoading.vue'
import SnackBar from '~/components/SnackBar.vue'
import ShowPassword from '~/components/button/ShowPassword.vue'

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
    ValidationProvider,
    PageLoding,
    SnackBar,
    ShowPassword
  },
  setup () {
    const { $axios }: any = useContext()
    const router = useRouter()

    const data = reactive({
      email: '',
      password: '',
      confirmation: '',
      snackbarText: '',
      imageSnackbarURL: '',
      statusBtn: true,
      pageLoadingStatus: false,
      snackbarStatus: false,
      typePassword: 'password',
      checkBoxText: 'Show Password'
    })

    const checkStatusBtn = (message: any) => {
      if (message[0]) {
        data.statusBtn = true
      } else {
        data.statusBtn = false
      }
    }

    const showPassword = () => {
      if (data.typePassword === 'password') {
        data.typePassword = 'text'
        data.checkBoxText = 'Hide Password'
      } else {
        data.typePassword = 'password'
        data.checkBoxText = 'Show Password'
      }
    }

    const resetStatus = () => {
      if (data.snackbarStatus) {
        setTimeout(() => {
          data.snackbarStatus = false
          router.push('/login')
        }, 2000)
      }
      data.pageLoadingStatus = false
      data.snackbarStatus = true
    }

    const onSubmit = async () => {
      const body = {
        email: data.email,
        password: data.password
      }
      await $axios
        .$post('/register', body)
        .then(() => {
          data.snackbarText = 'ลงทะเบียนสำเร็จ'
          data.imageSnackbarURL = '/check.png'
          data.pageLoadingStatus = true
          setTimeout(() => {
            resetStatus()
          }, 2000)
          setTimeout(() => {
            resetStatus()
          }, 3000)
        })
        .catch((error: any) => {
          console.log(error)
          data.snackbarText = 'เกิดข้อผิดพลาด'
          data.imageSnackbarURL = '/multiply.png'
          data.snackbarStatus = true
          setTimeout(() => {
            resetStatus()
          }, 2000)
        })
    }
    return { onSubmit, data, checkStatusBtn, showPassword }
  }
})
</script>
