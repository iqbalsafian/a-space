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

it('Object "one" should return a number', () => {
  const Led = new LED()
  const mockObj = {filled: 2, data: {0: {0: 0, 1: 0, 2: 0}, 1: {0:1, 1:0, 2:0}, 2: {0:1, 1:0, 2:0}}}
  expect(Led.logOutput(mockObj)).toBe(2)
})
