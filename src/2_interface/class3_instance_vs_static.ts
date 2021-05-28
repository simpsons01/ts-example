// instance vs static
class InstanceVsStatic {
   b
   static a = 1
   constructor(arg) {
     this.b = arg
   }
}

const dummyObj = new InstanceVsStatic(1)