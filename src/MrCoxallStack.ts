/**
 * This file pushes to, pops, peeks, and prints a stack.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-16
 */

class MrCoxallStack {
  private readonly stack: number[] = []

  // getter method - returns the stack
  getStack(): number[] {
    return this.stack
  }

  // push method - inserts a number to the stack
  pushStack(tempNum: number): void {
    if (!isNaN(tempNum)) {
      this.stack.push(tempNum)
    } else {
      console.log('Not a Number!')
    }
  }

  // pop method - pops the brackets of the stack
  popStack(): number | undefined | string {
    if (this.stack.length === 0) {
      return 'None'
    } else {
      return this.stack.pop()
    }
  }

  // peek method - lets the user see the most recent number
  peekStack(): number | undefined | string {
    if (this.stack.length === 0) {
      return 'None'
    } else {
      return this.stack[this.stack.length - 1]
    }
  }
}

export = MrCoxallStack
