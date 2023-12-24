//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    if (str.length === 0){
      return false
    }
    
    const arr = str.split(' ')
    let ret = '#'
    for (const word of arr){
      ret+=word.charAt(0).toUpperCase()+word.slice(1)
    }
    if (ret.length>140 || ret.length === 1){
      return false
    }
    return ret
  }