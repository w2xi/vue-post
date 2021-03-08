<template>
	<div>
		<div class="box">
      <div class="header">
        <h1>Login</h1>
      </div>
      <div class="form">
        <div class="item">
          <input v-model="username" v-on:keyup.13="handleSubmit" placeholder="please enter your username" />
        </div>
        <div class="item">
          <input type="password" v-on:keyup.13="handleSubmit" v-model="password" placeholder="please enter your password" />
        </div>
        <div class="item button-box">
          <div class="button" @click="handleSubmit">Submit</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import { Toast } from 'vant'
import { mapMutations } from 'vuex'

export default {
  components: {
    [Toast.name]: Toast
  },
  data(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit(){
      if ( !this.username.trim() ){
        return Toast('please enter your username')
      }
      if ( !this.password.trim() ){
        return Toast('please enter your pasword')
      }
      Toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      const { data: result } = await this.$_axios.post(this.$_api.login, {
        username: this.username,
        password: this.password
      })
      Toast.clear()

      if ( result.code !== 10000 ){
        return Toast(result.msg)
      }
      this.saveUserInfo(result.data)
      this.$router.push('/home')
    },
    ...mapMutations(['saveUserInfo'])
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.fade-enter-active, .fade-leave-active
  transition: opacity .3s
.fade-enter, .fade-leave-to
  opacity: 0
.box
  width: 80% 
  height: 340px
  text-align: center
  margin: 100px auto
  box-shadow: 4px 4px 10px 4px rgba(0,0,0,.1)
  background: #fefefe
  .header
    padding: 20px 0
    h1 
      margin: 10px 0
  .form 
    margin-top: 40px
    .item + .item 
      margin-top: 10px
    input, .button
      font-size: 14px
      width: 80%
      padding: 10px
      border: 1px solid #cfcfcf
    .item.button-box
      margin-top: 20px  
    .button
      margin: 0 auto
      background: $activeBlue
      color: #fff
</style>	