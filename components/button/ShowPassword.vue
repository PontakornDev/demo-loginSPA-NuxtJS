<template>
  <v-checkbox
    color="secondary"
    :label="checkBoxText"
    @click="() => $emit('showPassword')"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'

export default defineComponent({
  props: {
    lable: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const checkBoxText = ref<string>(props.lable)
    watch(() => props.lable, (value) => {
      checkBoxText.value = value
    })

    return { checkBoxText }
  }
})
</script>
