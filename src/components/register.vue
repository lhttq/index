<template>
    <div class="register">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.pass"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               form: {
                   name:'',
                   pass:'',
               },
           }
       },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .register{
        right: 0;
        left: 0;
        margin: auto;
        width: 30%;
    }
</style>
