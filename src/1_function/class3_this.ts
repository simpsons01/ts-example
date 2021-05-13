class Foo {
  a = 1
}

interface dummyThisObj {
  (a: (this: Foo) => void): void
}

function dummyThisFunc(a: () => void): dummyThisObj {
  return void
}




