'use strict'

const app = Vue.createApp({
  data() {
    return {
      message: '',
      imgAdd: "https://picsum.photos/seed/picsum/200/300",
      colorClass: 'bg-warning',
    };
  },

  methods: {
    changeBgClass() {
      this.colorClass = !this.colorClass;
    },
  },
});
app.mount('#app');
