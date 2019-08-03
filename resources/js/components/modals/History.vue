<template>
  <div class="modal-body history-modal">
    <h1>История игр пользователей</h1>
    <ul class="head">
      <li>#</li>
      <li>Игра</li>
      <li>Платформа</li>
      <li>Год</li>
      <li>Победитель</li>
      <li>Дата заверщения</li>
    </ul>
    <ul class="body" v-for="(item, index) in historyList">
      <li>{{++index}}</li>
      <li><a :href="item.game.id">{{item.game.title}}</a></li>
      <li>{{item.platform}}</li>
      <li>{{item.year}}</li>
      <li><a :href="item.player.id">{{item.player.name}}</a></li>
      <li>{{item.end}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'faq',
  props: ['show'],
  data () {
    return {
      historyList: [
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },
        {
          id: 1,
          game: {
            id: '1',
            title: 'Test Game'
          },
          platform: 'XBOX',
          year: '2019',
          player: {
            id: 1,
            name: 'Tes player'
          },
          end: '23.04.2019 22:11'
        },

      ]

    }
  },
  methods: {}
}
</script>
<style>

</style>
