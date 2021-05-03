interface animal {
  name: string
}

interface animal2 {
  attack: number
}

interface animal3 {
  name: string
  attack: number
}


class animalPrint<T extends animal | animal2> {
   constructor(
     public property1: T
   ) {}
}

new animalPrint<animal2>({ attack: 2 })