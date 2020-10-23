<template>
    <div class="register">
        <h2>注册系统</h2>
        <p><label>用户名：</label><input type="text" v-model="username" @blur="checkUser()"/>
            <span v-show="showErr1" class="error">用户名已存在</span> </p>
        <p><label>密码：</label><input type="text" v-model="pass" @blur="validatePass()"/>
            <span v-show="showErr2" class="error">用户密码需为6-16位字符</span></p>
        <p><label >再输入一次密码：</label><input type="text" v-model="passagain" @blur="validatePassagain()"/>
            <span v-show="showErr3" class="error">两次密码输入不一致</span> </p>
        <button @click="doRegister()">注册</button>
        <button @click="doReset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return {
                username:'',
                pass:'',
                passagain:'',
                showErr1:false,
                showErr2:false,
                showErr3:false
            }
        },
        methods:{
            checkUser(){
                let found = this.$store.state.user.find((obj)=>{return (obj.username == this.username)})
                if (found!=undefined)
                    this.showErr1 = true;
                else
                    this.showErr1 = false;
            },
            doRegister(){
                this.$store.commit("addUser",{username:this.username,password:this.pass});
                alert("注册成功，将切换到登录窗口");
                this.$router.push('/login');
            },
            doReset(){
                this.username = "";
                this.pass = "";
                this.passagain="";
            },
            validatePass(){
                var reg = new RegExp(/^\w{6,16}$/);
                this.showErr2 = !reg.test(this.pass)
            },
            validatePassagain(){
                this.showErr3 = (this.passagain!=this.pass);

            }
        }
    }
</script>

<style scoped>
    .register{width:50%; background:springgreen; margin:0px auto; padding:10px; color:#2c3e50;}
    .register label{display:inline-block;width:40%;}
    .register span.error{color:darkred;}
    .register button{width:80px; height:30px; background: #2c3e50; color:khaki; margin-right:20px; border:none;}
    .register p{margin:10px 0px;}
</style>