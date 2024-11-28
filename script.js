const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let a = parseInt(prompt("enter number a"));
      // let b = parseInt(prompt("enter number b"));

      if (b === 0) {
        reject("invalid number");
      } else {
        output = a / b;
        resolve(output);
      }
    }, 2000);
  });
};
async function alloutput() {
  try {
    let result = await divide(10, 2);

    console.log("dividing 10 by 2 result is=", result);
    let result2 = await divide(20, 10);
    console.log("dividing 20 by 10 result is=", result2);
    let result3 = await divide(100, 5);
    console.log("dividing 100 by 5 result is=", result3);
    let result4 = await divide(40, 4);
    console.log("dividing 40 by 4 result is=", result4);
    let result5 = await divide(16, 4);
    console.log("dividing 16 by 4 result is=", result5);
  } catch (error) {
    console.log("error ocured", error);
  }
}
alloutput();
