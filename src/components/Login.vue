<template>
<div class="login">
    <el-button type="primary" @click="dialogFormVisible = true">Login</el-button>

    <el-dialog title="Login" :visible.sync="dialogFormVisible" center>
        <el-form :model="form">
        <el-form-item label="Email" :label-width="formLabelWidth">
            <el-input type="email" v-model="form.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click.prevent='actionlogIn' >Login</el-button>
        </span>
    </el-dialog>
</div>
</template>
<!-- Form -->
<script>
export default {
  name: 'Login',
  data () {
    return {
      dialogFormVisible: true,
      form: {
        email: '',
        password: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    actionlogIn () {
      const data = {
        email: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('logIn', data)
    }
  },
  watch: {
    isLogin: function (newValue, oldValue) {
      if (newValue && !oldValue) {
        this.$router.push({ path: '/' })
      }
    }
  },
  computed: {
    isLogin: {
      get: function () {
        const { isLogIn } = this.$store.state.auth
        return isLogIn
      },
      set: function (newValue) {
      }
    }
  }
}
</script>
