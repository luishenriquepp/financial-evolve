<template>
  <div class="fixed-expense">
    <input type="text" v-model="expense" v-on:blur="count++"/> <br>
    {{count}}
  </div>
</template>

<script>
  export default {
    name: 'fixed-expense',
    data() {
      return {
        expense: 100,
        count: 0
      }
    },
    created() {
      this.try();
    },
    methods: {
      try() {
        fetch('http://localhost:3000/api/fixedexpense')
        .then(data => {
          console.log(data);
        })
      }
    }
  }
</script>