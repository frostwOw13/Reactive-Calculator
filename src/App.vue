<script>
import CustomButton from "./components/UI/NumberButton.vue";
import CustomInput from "./components/UI/CustomInput.vue";
export default {
  components: {
    CustomInput,
    CustomButton
  },
  data() {
    return {
      numbers: [
          1,2,3,4,5,6,7,8,9,0
      ],
      text: '',
    }
  },
  methods: {
    calculate() {
      console.log(this.text + 'dd');
      this.text = '';
    }
  },
  watch: {
    text() {
      this.calculate();
    }
  }
}
</script>

<template>
  <div>hello</div>
  <custom-input v-model="text"></custom-input>
  <custom-button
      v-for="number in numbers"
      :key="number"
      :number="number"
  >
  </custom-button>
</template>

<style>

</style>
