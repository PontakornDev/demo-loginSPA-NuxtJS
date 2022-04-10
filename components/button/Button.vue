<template>
  <a
    class="px-6 py-2 mt-4 text-white text-center rounded-lg cursor-pointer"
    :class="buttonColor"
    @click="$router.push(`${path}`)"
  >
    {{ title }}
  </a>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonColor: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  setup () {

  }
})
</script>
