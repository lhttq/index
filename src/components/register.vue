<template>
    <div class="register">
        <form class="layui-form" action="">
            <div class="layui-form-item">
                <label id="title" class="layui-form-label">注册账号</label>
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
                <label class="layui-form-label">确认密码</label>
                <div class="layui-input-block">
                    <input type="password" v-model="rePass" name="password" required lay-verify="required" placeholder="请再次输入密码" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">手机号</label>
                <div class="layui-input-block">
                    <input type="text" v-model="form.userphone" name="account" required  lay-verify="required" placeholder="请输入手机号" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">邮箱</label>
                <div class="layui-input-block">
                    <input type="text" v-model="form.usernum" name="account" required  lay-verify="required" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <button @click="onSubmit" class="layui-btn ayui-btn-fluid" onclick="return false">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios';
    export default {
       data(){
           return{
               rePass:'',
               form: {
                   userName:'',
                   userpass:'',
                   userphone:'',
                   usernum:''
               },
           }
       },
        methods:{
            onSubmit() {
                if(this.form.userName==''){
                    Toast("账号不能为空");
                    return;
                }
                if(this.form.userpass == ''){
                    Toast("密码不能为空");
                    return;
                }
                if(this.rePass == ''){
                    Toast("密码不能为空");
                    return;
                }else if(this.rePass != this.form.userpass){
                    Toast("两次输入密码不一致，请重新输入");
                    return;
                }
                if(this.form.userphone == ''){
                    Toast("手机号不能为空");
                    return;
                }
                if(this.form.usernum == ''){
                    Toast("身份证号不能为空");
                    return;
                }
                axios
                    .post('/users/insertUser',this.form)
                    .then(response => {
                        //测试服务端的返回0或1，0为密码错误或账号不存在，1为登录成功
                        this.info = response;
                        if(this.info.data == 1){
                            //使用mintUI的Toast的消息提示
                            Toast("注册成功");
                        }else if(this.info.data == -1){
                            Toast("该账号已存在");
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });

            }
        }
    }
</script>

<style scoped>
    .register{
        right: 0;
        left: 0;
        margin: auto;
    }
</style>
