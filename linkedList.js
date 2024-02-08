class Node {
    constructor(data = null, nextNode = null){
        this.data = data;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert new element as the head
    insertListHead(data){
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // Prints out all the data from linked list
    getListData(){
        let current;
        current = this.head;

        while(current){
            console.log(current.data);
            current = current.nextNode;
        }
    }

    // Appends new node to the end of the linked list
    appendNewNode(data){
        // If there are no nodes in the linked list
        if(!this.head){
            this.head = new Node(data);
            this.size ++;
            return this;
        } 
        // If we have nodes in the linked list
        else {
            let current = this.head;

            while(current.nextNode !== null){
                current = current.nextNode;
            }
            current.nextNode = new Node(data);
            this.size ++;
        }
    }

    // Get the size of the linked list
    getListSize(){
        console.log(this.size);
        return this.size;
    }

    // Get linked list head
    getListHead(){
        console.log(this.head);
        return this.head;
    }

    // Get linked list tail / last node
    getListTail(){
        if(!this.head){
            return 'This linked list has no nodes!';
        } else {
            let current = this.head;

            while (current.nextNode !== null){
                current = current.nextNode;
            }

            console.log(current);
            return current;
        }
    }

    // Returns node at the given index
    atIndex(index){
        // If linked list has no nodes
        if(!this.head){
            return 'This linked list has no nodes!';
        } 

        // Traverse nodes until index
        else {
            let current = this.head;
            for (let i = 0; i < index; i++){
                current = current.nextNode;
                if(current === null){
                    console.log('There is no node at the given index.');
                    return null;
                } 
            }
            if (current !== null){
                console.log('Node at index ' + index + ' is: ');
                console.log(current);
                return current;
            }
        }
    }

    // Removes last node from the list
    pop(){
        let newTail = this.atIndex(this.getListSize() - 2);
        newTail.nextNode = null;
        this.size --;
    }

    // Checks if the value is in the list
    // If value found return true else false
    contains(value){
        let current = this.head;
        if(current.data === value){
            console.log('Value ' + value + ' has been found in the linked list');
            return true;
        }

        while(current.nextNode !== null){
            current = current.nextNode;

            if(current.data === value){
                console.log('Value ' + value + ' has been found in the linked list');
                return true;
            }
        }

        console.log('Value ' + value + ' has not been found inside the linked list');
        return false;
    }

    // Returns the index of the value if found in the linked list
    find(value){
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            if(current.data === value){
                console.log('value ' + value + ' found on index: ' + i);
                return i;
            }
            current = current.nextNode;
        }

        console.log('Value has not been found in the list');
        return false;
    }

    // Visual print of linked list
    toString(){
        if(!this.head){
            console.log('There are no values in the linked list!');
            return false
        } else {
            let current = this.head;
            let string = `(${current.data}) -> `;

            while (current.nextNode !== null){
                current = current.nextNode;
                string += `(${current.data}) -> `
            }

            string += `null`;
            console.log(string);
            return string;
        }
    }
}

let ll = new LinkedList();
ll.insertListHead(100);
ll.insertListHead(200);
ll.insertListHead(300);
ll.appendNewNode(400);
ll.getListData();
ll.getListSize();
ll.getListHead();
ll.getListTail();
ll.atIndex(0);
ll.atIndex(1);
ll.atIndex(2);
ll.atIndex(3);
ll.getListSize();
ll.pop();
ll.getListSize();

ll.contains(500);
ll.contains(200);
ll.contains(100);
ll.contains(300);
ll.contains(600);
ll.contains(400);

ll.find(100);
ll.find(200);
ll.find(400);
ll.find(500);

ll.toString();
ll.appendNewNode(500);
ll.appendNewNode(700);
ll.appendNewNode('kekw');
ll.toString();
ll.getListSize();

// Ovo vraca poslednji element iz linked liste
// ll.atIndex(ll.getListSize() - 1);

// Ovo vraca predposlednji element iz linked liste
// ll.atIndex(ll.getListSize() - 2);