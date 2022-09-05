// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

//P: Will be intaking _ for flat and n for bumps

function bump(x){
    const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

//another soln
const bump = x => {
    let string = "";
    for (let count = 0; count < x.length; count++) {
      if (x[count] == 'n') {
        string += x[count];
      }
    }
    if (string.length > 15) {
      return 'Car Dead';
    } else {
      return 'Woohoo!'
    }
  };