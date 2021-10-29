<template>
  <div class="detail">
    <h1>detail画面です</h1>
  </div>
</template>

<script>
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
};
</script>
