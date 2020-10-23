<template>
    <div class="loginSuccess">
        <h1>恭喜你成功登录</h1>
        <p>欢迎您：{{this.$route.params.username}}</p>
        <p>您的密码是：{{this.$route.params.password}}</p>
    </div>
</template>

<script>
    export default {
        name: "LoginSuccess",
    }
</script>

<style scoped>
    .loginSuccess{width:100%; height:100%; display:flex; flex-direction:column; justify-content: center; align-items: center; color:white;}
    .loginSuccess p{margin-top:10px;}
</style>