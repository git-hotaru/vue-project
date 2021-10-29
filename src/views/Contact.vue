<template>
  <div class="contact">
    <!-- <span>count is {{ count }}</span> -->
    <span>plusOne is {{ plusOne }}</span>
    <button @click="increment">count++</button>
    <button @click="decrement">count--</button>

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
    return {
      count: 0,
      count_up: 15,
    };
  },
  computed: {
    plusOne() {
      if (this.count_up > this.count) {
        return this.count + 1;
      } else {
        return "sorry, i can't countup!!";
      }
    },
  },
  methods: {
    increment() {
      return this.count++;
    },
    decrement() {
      return this.count--;
    },
  },
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
      });
    this.email = "";
    this.password = "";
  },
};
</script>
