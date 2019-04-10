<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
import './index.scss'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
