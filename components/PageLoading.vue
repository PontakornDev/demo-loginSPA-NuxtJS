<template>
  <div class="text-center">
    <v-overlay :value="data.overlay">
      <v-progress-circular
        indeterminate
        color="grey darken-4"
        size="70"
      />
      <div class="pt-3">
        กำลังโหลด...
      </div>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const data = reactive({
      overlay: false
    })

    watch(() => props.value, (value) => {
      data.overlay = value
    })
    return { data }
  }
})
</script>
