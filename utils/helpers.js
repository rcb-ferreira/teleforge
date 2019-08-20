const _data = null;
const next = null;
const previous = null;
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
    }

}