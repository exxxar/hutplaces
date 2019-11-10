<template>
    <div>
        <h1>404</h1>

      <h2>Sorry... <br>
        Page not found</h2>

        <router-link tag="button" class="btn btn-yellow"
                     to="/index">
            На главную
        </router-link>
    </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  h1 {
    width: 100%;
    text-align: left;
    line-height: 150%;
    font-size:200px;
    color:yellow;
    font-weight: 100;
  }

  h2 {
    width:100%;
    font-weight: 100;
    font-size:36px;
    text-align: center;
    color:white;
    padding-bottom:20px;
  }

  button {
    width:200px;
  }
</style>
