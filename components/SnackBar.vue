<template>
  <v-row justify="center">
    <v-dialog
      v-model="data.snackbar"
      max-width="400"
    >
      <v-card class="border-4 grid justify-items-center" color="#fcfcfc">
        <img :src="data.imageURL" height="100" width="150">
        <v-card-title class="md:text-xl text-sm font-bold text-black">
          {{ data.title }}
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const data = reactive({
      snackbar: props.value,
      title: props.title,
      imageURL: props.image
    })

    watch(() => props.value, (value) => {
      data.snackbar = value
    })

    watch(() => props.title, (value) => {
      data.title = value
    })

    watch(() => props.image, (value) => {
      data.imageURL = value
    })

    return {
      data
    }
  }
})
</script>
