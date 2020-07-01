<template>
    <div class="login">
        <form class="layui-form" action="">
            <div class="layui-form-item">
                <label id="title" class="layui-form-label">登录账号</label>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">账号</label>
                <div class="layui-input-block">
                    <input type="text" v-model="form.userName" name="account" required  lay-verify="required" placeholder="请输入账号" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">密码</label>
                <div class="layui-input-block">
                    <input type="password" v-model="form.userpass" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                    <button @click="onSubmit" class="layui-btn ayui-btn-fluid" onclick="return false">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </form>
        <div id="footer">
            <a href="">忘记密码？</a>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios';
    export default {
        data() {
            return {
                //数据对象，使用时请修改对象属性名称以及，数据绑定的属性名称
                form:{
                    userName:'',
                    userpass:'',
                },

                info:'',
            }
        },
        methods: {

            onSubmit() {
                if(this.form.userName == '') {
                    Toast("账号不能为空");
                    return;
                }
                if (this.form.userpass == ''){
                    Toast("密码不能为空");
                    return;
                }
                axios
                    .post('/users/selectByuserName',this.form)
                    .then(response => {
                        //测试服务端的返回0或1，0为密码错误或账号不存在，1为登录成功
                        this.info = response;
                        if(this.info.data == 1){
                            //使用mintUI的Toast的消息提示
                            Toast("登录成功");
                        }else{
                            Toast("密码错误");
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>
    #title{
        width: 100px;
        font-size: 1.5em;
    }
    .login{
        width: 100%;
        height: 64%;
        max-height: 80%;
        box-shadow: 2px 2px 2px lavender;
    }
    input{
        width: 80%;
    }
    #footer{
        height: 19%;
        bottom: 0;
        background-color: #ffc211;
    }
    #footer>a{
        display: block;
        padding: 15px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
    }
</style>
