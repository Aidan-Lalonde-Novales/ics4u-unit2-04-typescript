/**
 * This program runs alongside Stack.ts
 * in order to add items to and view a popped stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-16
 */

import Stack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// Constants
const prompt = promptSync()
const myStack = new Stack()

// Input
while (true) {
  const tempInput = prompt('Enter a number to add to the stack (or pop/peek): ')

  // Process
  if (tempInput === 'pop') {
    break
  } else if (tempInput === 'peek') {
    console.log(myStack.peekStack())
  } else {
    const tempNum = Number(tempInput)
    myStack.pushStack(tempNum)
  }
}

// Output
console.log('\nOriginal Stack:')
console.log(myStack.getStack())
console.log('\nPopped Item:')
console.log(myStack.popStack())

console.log('\nDone.')
