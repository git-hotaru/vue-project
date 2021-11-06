<template>
  <div class="login">
    <h1>This is an about page</h1>

    <h2>ログイン</h2>
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
        <button type="button" @click="login()">送信</button>
      </div>
    </form>
  </div>
  <div id="result"></div>
</template>

<script>
import axios from "/Users/yamaguchihiroki/Desktop/vue-project/axios-for-auth.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      result: "",
    };
  },
  methods: {
    login() {
      //axiosでログイン用のインスタンスにアクセスするメソッドを定義
      axios
        .post(
          //エンドポイントのURLがログイン用のものを使う
          "/accounts:signInWithPassword?key=AIzaSyAQ1wZBY1lnwOvbjQaaBEYnCrXbEgr78uA",
          {
            email: this.email, //送る情報は新規登録と同じ
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response); //返ってきたレスポンスをログに表示
          this.$store.commit("updateIdToken", response.data.idToken); //追記
          this.$router.push("/detail"); //追記
        })
        .catch((err) => {
          console.log("err:", err);
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>
