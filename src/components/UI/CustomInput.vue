<template>
  <input :value="modelValue" @keyup.enter="takeText" type="text" placeholder="..."/>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    takeText(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>