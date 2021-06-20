var app = new Vue({
  el: "#app",
  data: {
    imgSrc:
      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80",
    isActive: false,
    imgTitle: "lovely pic",
  },
  methods: {
    toogleActive: function () {
      this.isActive = !this.isActive;
    },
  },
});
