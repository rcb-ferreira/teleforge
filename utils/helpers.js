let _data = null;
let next = null;
let previous = null;

module.exports = {
    /*
     * Node Contructor
     * @param null $data
     */
    __contructor: function (node) {
        _data = node;
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
        let currNode = this.find(item);
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
    }

}