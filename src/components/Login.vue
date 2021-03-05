<template>
	<div>
		<div class="box">
      <div class="nav">
        <ul class="nav-container">
          <li 
            class="nav-item" 
            :class="{ active: item.active }"
            v-for="item of tabs"
            :key="item.id"
            @click="handleClick(item)"
          >
            <router-link :to="'/login/'+item.type">{{ item.type | capitalize }}</router-link> 
          </li>
        </ul>
      </div>
      <div class="form">
        <div class="error">{{ this.errorMsg }}</div>
        <div class="item">
          <input v-model="username" name="username" placeholder="please enter your username" />
        </div>
        <div class="item">
          <input type="password" v-model="password" placeholder="please enter your password" />
        </div>
        <transition name="fade">  
          <div class="item" v-show="type === 'signup'">
            <input type="password" v-model="ackPassword" placeholder="please confirm your password" />
          </div>
        </transition>
        <div class="item button-box">
          <div class="button" @click="handleSubmit">Submit</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
// import { axiosRq } from '@/common.js'
import { Toast } from 'vant'

export default {
	name: 'Login',
  components: {
    [Toast.name]: Toast
  },
  data(){
    return {
      tabs: [
        { id: 1, type: 'login', active: true, },
        { id: 2, type: 'signup', active: false, },
      ],
      type: 'login',
      username: '',
      password: '',
      ackPassword: '',
      errorMsg: '',
      timer: null,
    }
  },
  watch: {
    $route(){
      this.type = this.$route.params.type
    },
    errorMsg(){
      if ( this.timer ){
        clearInterval(this.timer)
      }
      this.timer = setTimeout(()=>this.errorMsg = '', 3000)
    }
  },
  methods: {
    async handleSubmit(){
      if ( !this.username ){
        this.errorMsg = '请填写用户名'
        Toast('请填写用户名')
        return
      }
      if ( !this.password ){
        this.errorMsg = '请填写密码'
        Toast('请填写密码')
        return 
      }
      if ( this.type === 'signup' ){
        if ( !this.ackPassword ){
          this.errorMsg = '请填写确认密码'
          Toast('请填写确认密码')
          return 
        }
        if ( this.password !== this.ackPassword ){
          this.errorMsg = '两次密码不相等'
          Toast('两次密码不相等')
          return 
        }  
      }
      const data = { 
        username: this.username,
        password: this.password,
      }
      let url = this.$_httpApi.login
      if ( this.type === 'signup' ){
        data.ackPassword = this.ackPassword
        url = this.$_httpApi.signup
      }
      this.$_http.post(url, data)
          .then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
    },
    handleClick(tabItem){
      this.tabs.forEach((item)=>{
        item.active = tabItem.id === item.id
      })
    },
  },
  created(){
    this.type = this.$route.params.type
  },
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .3s
.fade-enter, .fade-leave-to
  opacity: 0
.box
  width: 80% 
  height: 350px
  margin: 100px auto
  box-shadow: 4px 4px 10px 4px rgba(0,0,0,.1)
  background: #fefefe
  .nav-container
    display: flex
    height: 45px
    margin: 0
    padding: 0
    .nav-item
      width: 50%
      height: inherit   
      line-height: 45px
      list-style-type: none
      font-size: 17px
    .nav-item a 
      width: 100%
      display: block
      color: #a4a4a4
      text-decoration: none
    .nav-item.active
      background: #efefef  
    .nav-item.active a 
      color: #000
    .nav-item + .nav-item
      border-left: 1px solid #ededed
  .form 
    padding: 70px 0 0
    position: relative
    .error 
      position: absolute
      top: 30px
      font-size: 13px
      margin-left: 20px
      padding: 15px 0
      text-align: left
      color: red
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
      background: #06ff
      color: #fff
</style>	