interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
}

interface LinkedList<T> {
  head: LinkedListNode<T> | null
  length(): number
  at(index: number): LinkedListNode<T> | null
  insert(index: number, value: T): void
  //remove(index: number): void
}

class linkedNode<T> implements LinkedListNode<T> {
   public value: T
   public next: LinkedListNode<T> | null 
   constructor(num) {
     this.value = num
   }
}


class linkedNodeList<T> implements LinkedList<T> {
  public head: LinkedListNode<T> | null

  length() {
    if(this.head === null) return 0
    let count = 0, node = this.head
    while(node !== null) {
      node = node.next
      count += 1
    }
    return count
  }

  at(index: number): LinkedListNode<T> | null {
    if(index > this.length()) return null
    let count = index, node = this.head
    while(count > 0) {
      node = node.next
      count -= 1
    }
    return node
  }

  insert(index: number, value: T): void {
     if(index > this.length()) return
     const node = new linkedNode<T>(value)
     if(index === 0) {
       const originalHeadNode = this.head
       this.head = node
       this.head.next = originalHeadNode 
     }else if(index === this.length()) {
       let lastLinkedNode = this.at(index)
       let cloneLinkedListNode = { ...lastLinkedNode }
       lastLinkedNode = node
       lastLinkedNode.next = cloneLinkedListNode 
     }else if(index < this.length()) {
      let prevLinkedNode = this.at(index - 1)
      let cloneLinkedListNode = { ...prevLinkedNode }
      prevLinkedNode = node
      prevLinkedNode.next = cloneLinkedListNode 
     }
  }
}

const numberLinedList = new linkedNodeList<Array<number>>()

numberLinedList.insert(0, [1, 2, 3])
//numberLinedList.insert(1, [4, 5, 3])

console.log(numberLinedList)