var app = new Vue({
  el: "#todolist",
  data: {
    message: "good good study,day day up",
    todoArr: ["learn vue", "have a rest", "sporting"],
  },
  //   index: 0,
  methods: {
    addList: function () {
      this.todoArr.push(this.message);
    },
    remove: function (index) {
      this.todoArr.splice(index, 1);
    },
    clearList: function () {
      this.todoArr = [];
    },
  },
});
