module.exports = function toReadable (number) {
  
    let numberLess20 = (n) => {
        switch (n){
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
            case '10': return 'ten';
            case '11': return 'eleven';
            case '12': return 'twelve';
            case '13': return 'thirteen';
            case '14': return 'fourteen';
            case '15': return 'fifteen';
            case '16': return 'sixteen';
            case '17': return 'seventeen';
            case '18': return 'eighteen';
            case '19': return 'nineteen';
          }
      }
      let secondWord = (n) => {
        switch (n) {
            case '2': return 'twenty';
            case '3': return 'thirty';
            case '4': return 'forty';
            case '5': return 'fifty';
            case '6': return 'sixty';
            case '7': return 'seventy';
            case '8': return 'eighty';
            case '9': return 'ninety';
            case '0': return '';
        }
    }
    let thirdWord = (n) => {
      switch (n){
          case '1': return 'one hundred';
          case '2': return 'two hundred';
          case '3': return 'three hundred';
          case '4': return 'four hundred';
          case '5': return 'five hundred';
          case '6': return 'six hundred';
          case '7': return 'seven hundred';
          case '8': return 'eight hundred';
          case '9': return 'nine hundred';
      }
    }
    let firstWord = (n) => {
      switch (n){
          case '1': return 'one';
          case '2': return 'two';
          case '3': return 'three';
          case '4': return 'four';
          case '5': return 'five';
          case '6': return 'six';
          case '7': return 'seven';
          case '8': return 'eight';
          case '9': return 'nine';
      }
    }
    
  if(number < 20){
      return numberLess20(number.toString());
  }
  
  number = number.toString();
  let len = number.length;
  
  if(len === 2){
      if(number[1] === '0') return secondWord(number[0]);
      return secondWord(number[0]) + " " + firstWord(number[1]);
  }
  if(len === 3){
      if(Number(`${number[1]}${number[2]}`) < 20 && number[1] !== '0') return thirdWord(number[0]) + " " + numberLess20(`${number[1]}${number[2]}`);
      if(number[2] === '0' && number[1] === '0') return thirdWord(number[0]);
      if(number[1] === '0') return thirdWord(number[0]) + " " + firstWord(number[2]);
      if(number[2] === '0') return thirdWord(number[0]) + " " + secondWord(number[1]);
      
    return thirdWord(number[0]) + " " + secondWord(number[1]) + " " + firstWord(number[2]);
}
}
