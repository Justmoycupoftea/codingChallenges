// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//P:will there be any special characters?
//R: return string without #
//E: shoe#.com --> shoe.com
//P: filter string if === # splice and return

function removeUrlAnchor(url){
    return url.split('#')[0];
}

//another soln
function removeUrlAnchor(url){
    let string = ""
    for(let i = 0; i < url.length; i++){ //loop through string
      if(url[i] === "#") { break } //break # and return new string w/o # and new string
      string += url[i]
    }
    return string 
  }