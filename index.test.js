import LED from './index'

it('Will check if the LED class has been init by calling its constructor', ()=>{
  const Led = new LED()
  expect(Led).toBeTruthy()
})

it('Expects if the method runProcess is being called', () => {
  const Led = new LED()
  Led.runProcess('sample-input.txt')
})

it('Will log an error if no file name being passed to the method runProcess', () => {
  const Led = new LED()
  Led.runProcess()
})
