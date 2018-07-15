export default class LED {
  constructor(){}
  runProcess(fileName = null){
    let fs = require('fs')
    if (fileName === null) {
      console.log('File name not found')
      return
    }
    this.setInput(fileName)
  }
  setInput(fileName){
    let currentIndex = 0
    let theObject = {}
    let lineReader = require('readline').createInterface({
      input: require('fs').createReadStream(fileName)
    })
    lineReader.on('line', (line) => {
      console.log(line);
      if (line == null) {
        this.processInput(theObject)
      } else {
        theObject[currentIndex] = line
      }
    })
  }
  processInput(theObject){}
  logOutput(theObject){}
}
