<template>
    <div>
        <h1>Home</h1>
      <wheel-of-fortune :segments="options"/>
    </div>
</template>

<script>
  import WheelOfFortune from '../components/WheelOfFortune'

  export default {
    components:{
        WheelOfFortune
    },
    data(){
      return{
        options:[
          {
            textFillStyle: 'red',
            fillStyle: '#000',
            text:'Card'
          },
          {
            textFillStyle: '#000',
            fillStyle: '#fadede',
            text:'100 coins'
          },
          {
            textFillStyle: '#fff',
            fillStyle: '#000',
            text:'Good mood'
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
