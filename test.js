function sum() {
  let res = 0;
  this.list.forEach((v) => {
    res += v.num * v.price;
  });
  return res;
}
