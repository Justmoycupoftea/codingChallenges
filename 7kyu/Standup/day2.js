// // Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// // * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// // * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// // * url = "https://www.cnet.com"                -> domain name = cnet"
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//url trad no funny biz
//any spaces, any special characters
//str
//doesn't work with 'www' only for some reason

function parseDomainName(url){
    return url.replace('https://','').replace('http://','').replace('www','').split('.')[0]

    //replace the stuff upfront

    //split grabbing the first value and return the name of website

}

console.log(parseDomainName('http://github.com/carbonfive/raygun'), 'github')
console.log(parseDomainName('http://www.zombie-bites.com'), 'zombie-bites')
console.log(parseDomainName('https://www.cnet.com'), 'cnet')

//another soln
function domainName(url){
    return  url.replace('http://', '')
               .replace('https://', '')
               .replace('www.', '')
               .split('.')[0];
  }

