//https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
    let counter = 0
    for (let i=1; i<m**(1/3); i++){
      counter+=i**3
      if (counter===m){
        return i
      }
    }
    return -1
}