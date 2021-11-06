<template>
  <div class="register">
    <!-- <span>count is {{ count }}</span> -->
    <h2>新規登録</h2>
    <form class="login-form">
      <div class="input-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="input-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="input-group">
        <button type="button" @click="register()">新規登録</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "/Users/yamaguchihiroki/Desktop/vue-project/axios-for-auth.js";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    register() {
      //axiosでapiを叩くメソッドを定義
      axios
        .post("/accounts:signUp?key=AIzaSyAQ1wZBY1lnwOvbjQaaBEYnCrXbEgr78uA", {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response); //返ってきたレスポンスをログに表示
          this.$store.commit("updateIdToken", response.data.idToken); //追記
          this.$router.push("/"); //追記
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>
