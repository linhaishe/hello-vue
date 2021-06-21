//使用表达式中调用方法计算属性

var app = new Vue({
  el: "#shopChart",
  data: {
    message: "",
    sumTotal: 0,

    shopList: [
      { name: "手机", num: 1, price: 1000 },
      { name: "电脑", num: 1, price: 2000 },
      { name: "洗衣机", num: 1, price: 5000 },
    ],
  },
  //   index: 0,
  methods: {
    minusNum: function (index) {
      if (this.shopList[index].num > 1) {
        this.shopList[index].num--;
      } else {
        if (confirm("是否删除该产品")) {
          //删除数组
          this.del(index);
        }
      }
    },
    addNum: function (index) {
      this.shopList[index].num++;
    },
    del: function (index) {
      this.shopList.splice(index, 1);
    },
    //表达式中调用方法计算属性，页面中的属性需要被调用，即需要写括号。表达式方法不会产生数据缓存
    totalPrice: function () {
      let res = 0;
      this.shopList.forEach((v) => {
        res += v.num * v.price;
      });
      return res;
    },
  },
  computed: {
    computedSum() {
      console.log(1);
      let res = 0;
      this.shopList.forEach((v) => {
        res += v.num * v.price;
      });
      return res;
    },
  },
  watch: {
    // list:function(){
    //     let res=0;
    //     this.list.forEach(v => {
    //         res+=v.num*v.price
    //     });
    //     this.sum=res;
    // }
    shopList: {
      handler: function (newv, oldv) {
        console.log("newv", "oldv", newv, oldv);
        setTimeout(() => {
          let res = 0;
          this.shopList.forEach((v) => {
            res += v.num * v.price;
          });
          this.sumTotal = res;
        }, 2000);
      },
      // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
      deep: true,
      // 该回调将会在侦听开始之后被立即调用
      immediate: true,
    },
  },
});
