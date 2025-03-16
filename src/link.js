class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0
    }

    insertFirst(data){
     this.head=new Node(data,this.head)
     this.size++
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
    
        // If empty, make head
        if (!this.head) {
          this.head = node;
        } else {
          current = this.head;
    
          while (current.next) {
            current = current.next;
          }
    
          current.next = node;
        }
    
        this.size++;
      }
}

const ll=new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(600)

// const n1=new Node(100)
console.log({ll: JSON.stringify(ll)})