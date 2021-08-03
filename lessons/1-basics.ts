const foo: string = 'foo'
const bar: number = 1
const baz: boolean = true
const qux: string[] = ['bar', 'baz', 'qux']

// Type inference
const fooInferred = 'foo'
const barInferred = 1
const bazInferred = true
const quxInferred = ['bar', 'baz', 'qux']

// Null
const n: null = null

let a: string
//@ts-expect-error
a = null

const b: string | null = Math.random() > 0.5 ? null : 'bar'
// OK: b = null

// el type es null, pero por defecto, antes, va a ejecutar lo que esta en el if ternario
if (b !== null) {
  const l = b.length
  console.log(l)
}

function sum(a: number, b: number = 1): number {
  return a + b
}

const result = sum(2)
console.log(result)

// Declaramos una variable subtract que recibe 2 parametros, el segundo con un valor por defecto y los suma, devuelve un numero
const subtract = (a: number, b: number = 1): number => a + b
const result2 = subtract(3)
console.log(result2)

function concatenate(a: string, b: string | null): string {
  if (b !== null) {
    return a.concat(b)
  }

  return a
}

const x = concatenate('Hello', null)
const y = concatenate('Hello ', 'world')

console.log(x)
console.log(y)

// Objects
const people: {
  name: string
  age: number
  job?: string
  pet: string | undefined
}[] = [
  { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
  { age: 32, name: 'Paul', pet: 'lizard' },
]

type Cat = { name: string; favouriteToy: string; age: number }

const cat: Cat = {
  age: 1,
  name: 'Tobby',
  favouriteToy: 'Ball',
}

function getNameOfCat(cat: Cat): string {
  return cat.name
}

getNameOfCat(cat)

export {}
