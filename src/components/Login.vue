<template>
	<div>
		<div class="box">
      <div class="nav">
        <ul class="nav-container">
          <li class="nav-item">
            <router-link to="/login/login">Login</router-link>
          </li>
          <li>
            <router-link to="/login/signup">Signup</router-link>
          </li>
        </ul>
      </div>
      <div class="form">
        <div class="item">
          <input v-model="username" name="username" placeholder="please enter your username" />
        </div>
        <div class="item">
          <input type="password" v-model="password" name="password" placeholder="please enter your password" />
        </div>
        <div class="item button-box">
          <div class="button">Submit</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	name: 'Login',
  data(){
    return {
      username: '',
      password: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
.box
  width: 80% 
  height: 300px
  margin: 100px auto
  box-shadow: 4px 4px 10px 4px rgba(0,0,0,.1)
  background: #fefefe
  .nav-container
    display: flex
    height: 80px
    .nav-item
      width: 50%
      height: inherit    
  .form 
    margin-top: 20px
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