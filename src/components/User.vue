<template>
    <div class="component">
        <el-form :model="form" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Email" prop="email">
            <el-input type="email" v-model="form.email"  @keyup.enter.native='actionlogIn'></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="form.password" @keyup.enter.native='actionlogIn'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.prevent="actionlogIn">Login</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Nhập đầy đủ thông tin email', trigger: 'blur' },
          { min: 3, message: 'email chưa hợp lệ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Nhập đầy đủ thông tin mật khẩu', trigger: 'blur' },
          { min: 5, message: 'Mật khẩu tối thiểu 5 ký tự', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getStaticData () {
      this.$store.dispatch('getAmenities')
      return 0
    },
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
