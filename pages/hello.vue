<template>
  <div>
    <span>Helloo</span>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  middleware: 'auth',
  setup () {

  }
})
</script>
