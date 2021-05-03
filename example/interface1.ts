// basic interface
interface Person {
  name: string
}

const obj: Person = {
  name: "ray"
}

// optional interface
interface OptionalPerson {
  name: string
  age?: number
}

const obj2: OptionalPerson = {
  name: "ray"
}

const obj3: OptionalPerson = {
  name: "ray",
  age: 2
}

// any interface
interface propNamePerson {
  name: string
  [propName: string]: any
}

const obj4: propNamePerson = {
  name: "ray",
  gender: "femal"
}

//readonly interface
interface readonlyPerson {
  readonly name: string
}

const obj5: readonlyPerson = {
  name: "ray"
}

obj5.name = "hu"
