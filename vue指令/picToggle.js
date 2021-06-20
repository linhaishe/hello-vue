let app = new Vue({
  el: "#picBox",
  data: {
    imgArr: [
      "./img/1.jpeg",
      "./img/2.jpeg",
      "./img/3.jpeg",
      "./img/4.jpeg",
      "./img/5.jpeg",
    ],
    index: 0,
  },
  methods: {
    prev: function () {
      this.index <= 0 ? (this.index = 0) : this.index--;
    },
    next: function () {
      this.index >= this.imgArr.length - 1 ? (this.index = 4) : this.index++;
    },
  },
});
