<template>
    <div>
        <h1>Home</h1>
      <vue-winwheel :segments="options"/>
    </div>
</template>

<script>
  import VueWinwheel from 'vue-winwheel'

  export default {
    components:{
      VueWinwheel
    },
    data(){
      return{
        options:[
          {
            textFillStyle: '#fff',
            fillStyle: '#000',
            text:'Prize 1'
          },
          {
            textFillStyle: '#000',
            fillStyle: '#fadede',
            text:'Prize 2'
          },
          {
            textFillStyle: '#fff',
            fillStyle: '#000',
            text:'Prize 3'
          },
          {
            textFillStyle: '#000',
            fillStyle: '#fadede',
            text:'Prize 4'
          },
          {
            textFillStyle: '#fff',
            fillStyle: '#000',
            text:'Prize 5'
          },
          {
            textFillStyle: '#000',
            fillStyle: '#fadede',
            text:'Prize 6'
          },
          {
            textFillStyle: '#fff',
            fillStyle: '#000',
            text:'Prize 7'
          },
          {
            textFillStyle: '#000',
            fillStyle: '#fadede',
            text:'Prize 8'
          }
        ]
      }
    }
  }
</script>
