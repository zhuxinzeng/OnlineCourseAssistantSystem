<template>
  <div class="Register">
    <div class="R-logo">
      <img src="../assets/image/图钉文字.png" style="margin-top:-25px;margin-left:20px;" alt />
      <!-- <img src="../assets/image/图钉.png" alt style="width:120px;height:120px;"  /> -->
    </div>
    <div class="R-form">
      <P>注册</P>
      <a-form :form="form" :layout="formLayout" @submit="handleSubmit" class="Form">
        <a-form-item
          label="学号"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-model="studentid" name="studentid">
            <a-icon slot="prefix" type="number" />
          </a-input>
        </a-form-item>
        <a-form-item
          label="姓名"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-model="userName" name="userName">
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-model="password" name="password" type="password">
            <a-icon slot="prefix" type="eye" />
          </a-input>
        </a-form-item>
        <a-form-item
          label="专业"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-model="major" name="major">
            <a-icon slot="prefix" type="profile" />
          </a-input>
        </a-form-item>
        <a-form-item
          label="邮箱"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-model="email" name="email">
            <a-icon slot="prefix" type="mail" />
          </a-input>
        </a-form-item>

        <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
          <a-button type="primary" @click="axiosRegisterUser()" :loading="openLoading">注册</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../serviceAPI.config.js";
export default {
  name: "",
  props: "",
  components: {},
  data() {
    return {
      userid: "",
      userName: "",
      password: "",
      studentid: "",
      tel: "",
      sex: "",
      major: "",
      email: "",
      formLayout: "horizontal",
      openLoading: false,
      usernameErrorMsg: "", //当用户名出现错误的时候
      passwordErrorMsg: "" //密码出现错误
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },

  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    checkForm() {
      let isOk = true;
      if (this.userName.length < 5) {
        this.usernameErrorMsg = "用户名不能小于5位";
        isOk = false;
      } else {
        this.usernameErrorMsg = "";
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
        isOk = false;
      } else {
        this.passwordErrorMsg = "";
      }
      return isOk;
    },
    axiosRegisterUser() {
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.userName,
          password: this.password,
          userid: "",
          tel: "",
          sex: "",
          major: this.major,
          email: this.email,
          studentid: this.studentid,
          identity: "",
          courseid: {}
        }
      })
        .then(response => {
          console.log(response);
          if (response.status == 200) {
            this.userid = response.data.message;
            console.log(response.data.message);
            this.$store.commit("saveUser", this.userName);
            this.$store.commit("saveUserid", this.userid);
            this.$store.commit("savestudentid", this.studentid);
            this.$store.commit("saveMajor", this.major);
            this.$message.success("注册成功");
            this.$router.push("/Home");
          } else {
            console.log(response.data.message);
            this.openLoading = false;
            this.$message.error("注册失败");
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("注册失败");
          this.openLoading = false;
        });
    }
  }
};
</script>

<style>
@import url("../assets/user-style/register.css");
</style>