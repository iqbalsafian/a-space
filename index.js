export default class LED {
  constructor(){}
  runProcess(fileName = null){
    let currentIndex = 0
    let theObject = {}

    try {
      let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(fileName)
      })
      lineReader.on('line', (line) => {
        if (line.length === 0) {
          this.processInput(theObject)
          currentIndex = 0
        } else {
          theObject[currentIndex] = line
        }
        currentIndex++
      })
      lineReader.on('close', ()=>{
        this.processInput(theObject)
      })
    } catch(err) {
      console.log('File not found');
      return
    }
  }
  processInput(theObject){
    let receivedNumbers = (theObject[0].length / 4).toFixed();
    let numberList = ''

    for (let i = 1; i <= receivedNumbers; i++) {
      let tempObject = {data:{0: {0:0, 1:0, 2:0}, 1: {0:0, 1:0, 2:0}, 2: {0:0, 1:0, 2:0}}, filled: 0}
      let filled = 0;
      for (let j = 0; j < 3; j++) {
        for (let k = (i * 3 - 4 + i); k < (i * 3 + i); k++) {
          if (theObject[j][k] !== ' ') {
            filled++;
              tempObject['data'][j][k] = 1
          }
        }
      }
      tempObject['filled'] = filled
      numberList += this.logOutput(tempObject)
    }
    console.log(numberList);
  }
  logOutput(theObject){
    if (theObject['filled'] === 2)
      return 2
    if (theObject['filled'] === 3)
      return 7
    else {
      return 'X'
    }
  }
}

let Led = new LED()
Led.runProcess('sample-input.txt')
