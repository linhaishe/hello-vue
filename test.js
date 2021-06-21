let get_integer_interval_2 = (number_a, number_b) => {
  getEvenArr(get_integer_interval_arr(number_a, number_b));
};

//获得给定数值的区间
let get_integer_interval_arr = (num1, num2) => {
  let integerArr = [];
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      integerArr.push(i);
    }
  } else {
    //num2<num1,num1>num2
    for (let i = num1; i >= num2; i--) {
      integerArr.push(i);
    }
  }
  return integerArr;
};

// console.log("test", get_integer_interval_arr(10, 1));

//获取偶数

let getEvenArr = (collection) => collection.filter((item) => item % 2 === 0);
let collect_all_even = (collection) =>
  collection.filter((element) => element % 2 === 0);

//console.log(get_integer_interval_2(1,10));
console.log("整数区间", get_integer_interval_arr(1, 10));
console.log("偶数区间", getEvenArr(get_integer_interval_arr(1, 10)));
console.log("最终结果");
