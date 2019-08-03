<template>
  <div class="report">
    <h1>{{$lang.messages.report}}</h1>
    <router-link tag="a" disabled class="reports-link" to="/my-reports">
      {{$lang.messages.my_reports}}
    </router-link>
    <p v-if="success != ''" class="alert" role="alert" @click="success=''">
      {{success}}
    </p>

    <form @submit.prevent="formSubmit">

      <div class="input-group">
        <label for="select-email">Email:</label>
        <input autocomplete="false" type="text" id="select-email"
               placeholder="Enter email" v-model="email" required>
      </div>

      <div class="input-group">
        <label for="select-errorType">Тип ошибки:</label>
        <select id="select-errorType">
          <option value="">Ошибка интерфейса</option>
          <option value="">Сетевые ошибки</option>
          <option value="">Логические ошибки</option>
        </select>
      </div>


      <div class="input-group">
        <label for="select-errorMessage">Сообщение:</label>
        <textarea autocomplete="false" id="select-errorMessage" placeholder="Enter problem description" v-model="description" required></textarea>
      </div>

      <div class="input-group">

        <input type="file" name="file" accept=".gif,.jpg,.jpeg,.png" id="file" ref="files" class="inputfile"
               v-on:change="onImageChange" multiple/>
        <label for="file">
          <p v-if="images.length==0">Choose a file</p>
          <p v-else>You choos {{images.length}} files</p>

        </label>

      </div>
      <div class="input-group">
        <button type="submit" class="btn btn-yellow full">Отправить</button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'report',
    props: ['show'],
    data() {
      return {
        images: [],
        title: '',
        description: '',
        email: '',
        success: ''
      }
    },
    methods: {
      close() {
        this.email = ''
        this.description = ''
        this.success = ''
        this.$emit('close', false)
      },
      onImageChange(e) {
        this.images = this.$refs.files.files
      },
      formSubmit(e) {
        let currentObj = this

        const config = {
          headers: {'content-type': 'multipart/form-data'}
        }

        let formData = new FormData()
        for (var i = 0; i < this.images.length; i++) {
          let file = this.images[i]
          formData.append('images[' + i + ']', file)
        }

        formData.append('email', this.email)
        formData.append('description', this.description)

        axios.post('/reportSubmit', formData, config)
          .then(function (response) {
            currentObj.success = response.data.success
            e.target.reset()
            this.email = ''
            this.description = ''
            this.success = ''
          })
          .catch(function (error) {
            currentObj.output = error
          })
      }

    }

  }
</script>

