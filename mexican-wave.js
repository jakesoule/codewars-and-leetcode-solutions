function wave(str){
    let holder = str.toLowerCase();
    let arr = []
    
    for (let i=0;i<str.length;i++){
      if (holder[i] != ' '){
        arr.push(holder.slice(0, i) + holder[i].toUpperCase() + holder.slice(i+1))
      }
    }
    return arr
  }

  //https://www.codewars.com/kata/58f5c63f1e26ecda7e000029