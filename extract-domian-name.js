function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    url = url.slice(0, url.indexOf('.'))
    return url
  }

  //https://www.codewars.com/kata/514a024011ea4fb54200004b

  //admittedly there is an edge case here which is unaccounted for, which is if a domain name ended in www, for example: examplewww.com
  //might come back to this later