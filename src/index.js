module.exports = function check(str, bracketsConfig) {

if (str.length%2 !== 0) {
  return false;
}

let open = [];
let closer = [];
for( let j = 0; j < bracketsConfig.length; j++) {
  open.push(bracketsConfig[j][0]);
  closer.push(bracketsConfig[j][1]);
}

let stack = [];
for (let i = 0; i < str.length; i++) {
  if(open.indexOf(str[i]) !== -1) { 
    if (open.indexOf(str[i]) === closer.indexOf(str[i]) && str[i] === stack[stack.length-1]) {
      stack.pop(); 
    } else {
      stack.push(str[i]);
    }
  } else if (closer.indexOf(str[i]) !== -1 && closer.indexOf(str[i]) === open.indexOf(stack[stack.length-1])) {
      stack.pop();
    } 
    else {
      return false;
    }
  }

if (stack.length > 0) {
  return false;
} else {
return true;
}
}
