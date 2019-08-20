let _data = null;
let next = null;
let previous = null;

module.exports = {
    /*
     * Node Contructor
     * @param null $data
     */
    __contructor: function (data) {
       _data = data;
    },

    /*
     * @return mixed
     */
    getDate: function () {
        return _data;
    },

    /*
     * @return null | Node
     */
    getNext: function () {
        return next;
    },

    /*
    * @param null | Node $next
    */
    setNext: function (data) {
        next = data;
    },

    /*
    * @return null | Node
    */
    getPrevious: function () {
        return previous;
    },

    /*
    * @return null | Node
    */
    setPrevious: function (data) {
        previous = data;
    },

    /*
    * @return null | Node
    */
    removeItem: function (item) {
        let currNode = find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }

        return currNode;
    },

    /*
    * @return null | Node
    */
    reverse: function () {
        let currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }

        return currNode;
    },

    /*
    * @return null | Node
    */
    find(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    },

    /*
    * add null | Node
    */
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    } 

}