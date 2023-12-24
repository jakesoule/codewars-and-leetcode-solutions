function orderWeight(strng) {
    const arr = strng.split(' ')
  
    arr.sort((a, b) => {
      let sumDigitsA = 0
      let sumDigitsB = 0
      
      for (const digit of a){
        sumDigitsA += Number(digit)
      }
      for (const digit of b){
        sumDigitsB += Number(digit)
      }
      
      if (sumDigitsA - sumDigitsB === 0){
        return a.localeCompare(b)
      }
      
      return sumDigitsA - sumDigitsB
      
    })
    return arr.join(' ')
}

//https://www.codewars.com/kata/55c6126177c9441a570000cc