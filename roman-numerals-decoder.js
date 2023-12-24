//https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution (roman) {
    const map = new Map()
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)
    
    let total = 0
    
    for(let i=0; i<roman.length-1; i++){
      if (map.get(roman[i+1])>map.get(roman[i])){
        total -= map.get(roman[i])
      }
      else{
        total += map.get(roman[i])
      }
    }
    total += map.get(roman[roman.length-1])
    return total
  }