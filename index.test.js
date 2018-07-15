import LED from './index'

it('Will check if the LED class has been init by calling its constructor', ()=>{
  const Led = new LED()
  expect(Led).toBeTruthy()
})

it('Will log an error if no file name being passed to the method runProcess', () => {
  const Led = new LED()
  Led.runProcess()
})

it('Expects if the method runProcess is being called', () => {
  const Led = new LED()
  Led.runProcess('sample-input.txt')
})

it('Should log output when processInput method is called', () => {
  const Led = new LED()
  const mockObj = {0: ' - ', 1: '| |', 2: ' _ '}
  Led.processInput(mockObj)
})

it('Should return positive number if the object is "one"', () => {
  const Led = new LED()
  const mockObj = {filled: 2, data: {0: {0: 0, 1: 0, 2: 0}, 1: {0:1, 1:0, 2:0}, 2: {0:1, 1:0, 2:0}}}
  expect(Led.logOutput(mockObj)).not.toBe(0)
})

it('Should return 1 if the object is "one"', () => {
  const Led = new LED()
  const mockObj = {filled: 2, data: {0: {0: 0, 1: 0, 2: 0}, 1: {0:1, 1:0, 2:0}, 2: {0:1, 1:0, 2:0}}}
  expect(Led.logOutput(mockObj)).toBe(1)
})

it('Should return 7 if the object is "7"', () => {
  const Led = new LED()
  const mockObj = {filled: 3, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:1, 1:0, 2:1}, 2: {0:1, 1:0, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(7)
})

it('Should return 4 if the object is "4"', () => {
  const Led = new LED()
  const mockObj = {filled: 4, data: {0: {0: 0, 1: 0, 2: 0}, 1: {0:1, 1:1, 2:1}, 2: {0:0, 1:1, 2:0}}}
  expect(Led.logOutput(mockObj)).toBe(4)
})

it('Should return 8 if the object is "8"', () => {
  const Led = new LED()
  const mockObj = {filled: 7, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:1, 1:1, 2:1}, 2: {0:1, 1:1, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(8)
})

it('Should return 2 if the object is "2"', () => {
  const Led = new LED()
  const mockObj = {filled: 5, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:0, 1:1, 2:1}, 2: {0:1, 1:1, 2:0}}}
  expect(Led.logOutput(mockObj)).toBe(2)
})

it('Should return 3 if the object is "3"', () => {
  const Led = new LED()
  const mockObj = {filled: 5, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:0, 1:1, 2:1}, 2: {0:0, 1:1, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(3)
})

it('Should return 5 if the object is "5"', () => {
  const Led = new LED()
  const mockObj = {filled: 5, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:1, 1:1, 2:0}, 2: {0:0, 1:1, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(5)
})

it('Should return 6 if the object is "6"', () => {
  const Led = new LED()
  const mockObj = {filled: 6, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:1, 1:1, 2:0}, 2: {0:1, 1:1, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(6)
})

it('Should return 9 if the object is "9"', () => {
  const Led = new LED()
  const mockObj = {filled: 6, data: {0: {0: 0, 1: 1, 2: 0}, 1: {0:1, 1:1, 2:1}, 2: {0:0, 1:1, 2:1}}}
  expect(Led.logOutput(mockObj)).toBe(9)
})

it('Should return X for unprocessed number', () => {
  const Led = new LED()
  const mockObj = {filled: 0, data: {0: {0: 0, 1: 0, 2: 0}, 1: {0:0, 1:0, 2:0}, 2: {0:0, 1:0, 2:0}}}
  expect(Led.logOutput(mockObj)).toBe('X')
})
