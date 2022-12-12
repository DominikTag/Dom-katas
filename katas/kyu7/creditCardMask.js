/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
*/

const maskify = function (cc) {

  const regex = /[0-9]+/;

  if(typeof cc !== 'string') {
    return false;
  }

  if(!regex.test(cc)) {
    return false;
  }

  let arrayCc = cc.split("");
  let result = [];
  
  for(let i = 0; i < arrayCc.length; i++) {
    if(i < arrayCc.length - 4) {
      result.push('#');
    } else {
      result.push(arrayCc[i]);
    }
  }
  return result.join('');
}

module.exports = { maskify };