<template>
    <div class="login">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
                <el-input v-model="form.name" placeholder="account"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="password" v-model="form.pass"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios';

    export default {
        data() {
            return {
                form: {
                    name:'',
                    pass:'',
                },
                info:'',
            }
        },
        methods: {

            onSubmit() {
                if(this.form.name == '') {
                    Toast("账号不能为空");
                    return;
                }
                if (this.form.pass == ''){
                    Toast("密码不能为空");
                    return;
                }
                axios
                    .get('/sopts/selectAll')
                    .then(response => {
                        this.info = response;
                        console.log(this.info);
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>
    .login{
        right: 0;
        left: 0;
        margin: auto;
        width: 80%;
    }
    .btn{
        background: dodgerblue;
    }
</style>
