var app = new Vue({
  el: "#app",
  data: {
    isShow: false,
    age: 17,
  },
  methods: {
    changIsShow: function () {
      this.isShow = !this.isShow;
    },
    addAge: function () {
      this.age++;
    },
  },
});
