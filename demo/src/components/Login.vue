<template>
    <div class="login">
        <h2>登录系统</h2>
        <p><label>用户名：</label><input type="text" v-model="username"/> </p>
        <p><label>密码：</label><input type="text" v-model="password"/> </p>
        <p>
            <button @click="doLogin()">登录</button>
            <button @click="doReset">重置</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            doLogin(){
                let found = this.$store.state.user.find(
                    (obj)=>{return ((obj.username == this.username) && (obj.password == this.password))}
                    );
                if (found!=undefined)
                    this.$router.push(
                        {name:'loginsuccess',params:{username:found.username,password:found.password}}
                        );
                else
                {
                    confirm("用户名密码错误，请重新输入");
                    this.doReset();
                    // this.username = "";
                    // this.password = "";
                }
            },
            doReset(){
                this.username = "";
                this.password = "";
            }
        }
    }
</script>

<style scoped>
.login{width:40%; background:springgreen; margin:0px auto; padding:10px; color:#2c3e50;}
    .login label{width:25%; display:inline-block;}
    .login button{width:80px; height:30px; background: #2c3e50; color:khaki; margin-right:20px; border:none;}
    .login p{margin:10px 0px;}
</style>