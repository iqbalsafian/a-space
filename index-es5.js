'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LED = function () {
  function LED() {
    _classCallCheck(this, LED);
  }

  _createClass(LED, [{
    key: 'runProcess',
    value: function runProcess() {
      var _this = this;

      var fileName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var currentIndex = 0;
      var theObject = {};

      if (fileName === null) {
        throw 'File name not provided';
        return;
      }
      try {
        var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(fileName)
        });
        lineReader.on('line', function (line) {
          if (line.length === 0) {
            _this.processInput(theObject);
            currentIndex = 0;
          } else {
            theObject[currentIndex] = line;
            currentIndex++;
          }
        });
        lineReader.on('close', function () {
          _this.processInput(theObject);
        });
      } catch (err) {
        throw 'File not found';
        return;
      }
    }
  }, {
    key: 'processInput',
    value: function processInput(theObject) {
      var receivedNumbers = (theObject[0].length / 4).toFixed();
      var numberList = '';

      for (var i = 1; i <= receivedNumbers; i++) {
        var tempObject = { data: { 0: { 0: 0, 1: 0, 2: 0 }, 1: { 0: 0, 1: 0, 2: 0 }, 2: { 0: 0, 1: 0, 2: 0 } }, filled: 0 };
        var filled = 0;
        for (var j = 0; j < 3; j++) {
          var id = 0;
          for (var k = i * 3 - 4 + i; k < i * 3 - 1 + i; k++) {
            if (theObject[j][k] !== ' ') {
              filled++;
              tempObject['data'][j][id] = 1;
            }
            id++;
          }
          tempObject['filled'] = filled;
        }
        numberList += this.logOutput(tempObject);
      }
      console.log(numberList);
    }
  }, {
    key: 'logOutput',
    value: function logOutput(theObject) {
      if (theObject['filled'] === 2) return 1;
      if (theObject['filled'] === 3) return 7;
      if (theObject['filled'] === 4) return 4;
      if (theObject['filled'] === 7) return 8;

      if (theObject['filled'] === 5) {
        if (theObject['data'][2][0] === 1) return 2;
        if (theObject['data'][1][2] === 1 && theObject['data'][2][2] === 1) return 3;
        return 5;
      }

      if (theObject['filled'] === 6) {
        if (theObject['data'][1][2] === 0) return 6;
        if (theObject['data'][2][0] === 0) return 9;
        return 0;
      }

      return 'X';
    }
  }]);

  return LED;
}();

exports.default = LED;


var Led = new LED();
Led.runProcess('sample-input.txt');
"use strict";
