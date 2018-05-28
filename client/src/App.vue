<template>
  <div id="app">
      <fixed-expense></fixed-expense>
  </div>
</template>

<script>
import FixedExpense from './components/FixedExpense.vue'

export default {
  name: 'app',
  components: {
    FixedExpense
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
