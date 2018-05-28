<template>
  <div class="fixed-expense">
    <div class="row">
        <div class="left">Market</div>
        <div class="right">
            <input type="text" value="200">
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fixed-expense',
    data() {
      return {
        expense: 100,
      }
    },
    created() {
      this.try();
    },
    methods: {
      try() {
        var myHeaders = new Headers();
        var myInit = 
        { 
          method: 'GET',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default'
        };
        fetch('http://localhost:3000/api/fixedexpense',myInit)
        .then(data => {
          console.log(data);
        })
      }
    }
  }
</script>

<style scoped>
input {
    text-align: center;
    border: 0;
    padding: 20px;
    width: 200px;
    height: 18px;
    background-color: #cc0000;
    color: #ffcccc;
    font-size: 20px;
}

input:focus {
    outline-color: chocolate;
    background-color: burlywood;
    color: brown;
}

.row {
    display: inline-block;
}

.left {
    height: 18px;
    font-size: 20px;
    float: left;
    width: 200px;
    background-color: #b30000;
    padding: 20px;
    color: #ffcccc;
    text-align: center;
}

.right {
    float: right;
}
</style>
