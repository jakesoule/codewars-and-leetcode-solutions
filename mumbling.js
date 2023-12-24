function accum(s) {
    let ret = '';
      for (let i=0; i<s.length; i++){
      ret += s[i].toUpperCase();
      for (let j=0; j<i; j++){
        ret += s[i].toLowerCase();
      }
      ret += '-';
    }
    ret = ret.slice(0,-1)
    return ret;
  }

  //https://www.codewars.com/kata/5667e8f4e3f572a8f2000039