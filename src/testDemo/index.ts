// import * as R from 'ramda'

const test = () => {
  if ('0') {
    console.log(`字符串'0'是 true`)
  } else {
    console.log(`字符串'0'是 false`)
  }

  if (0) {
    console.log(`数字0是 true`)
  } else {
    console.log(`数字0是 false`)
  }

  if (1) {
    console.log(`数字1是 true`)
  } else {
    console.log(`数字1是 false`)
  }

/* 
  if ('0' == false) {
    console.log(`字符串0等于false，不同类型的值会自动转换然后进行比较是否相等。`)
  } else {
    console.log(`字符串0,不等于false`)
  }

  if ('1' === false) {
    console.log(`字符串1等于false，`)
  } else {
    console.log(`字符串1不等于false`)
  }
 */
  if (undefined == undefined) {
    console.log(`undefined和自身相等`)
  }

  if (undefined === null) {
    console.log(`undefined和null相等`)
  }

  if(undefined === null) {
    console.log('undefined和null严格相等')
  } else {
    console.log('undefined和null严格相等')
  }

}
test()