const { DoublyLinkedList } = require('../utils/DoublyLinkedList');

// Initialize new Doubly Linked List
const doublyLinkedList = new DoublyLinkedList();

exports.show = (req, res) => {

    const order = req.query.order || 'asc';
    let list = doublyLinkedList.display();
    if (order === 'desc') {
        list = doublyLinkedList.reverse();
    }

    return res.status(200).json({ list });
}


exports.prepend = (req, res) => {
    const prepend = req.body.input;
    doublyLinkedList.appendAt(0, prepend);
    return res.status(200).json(`prepend`);
}

exports.append = (req, res) => {
    const append = req.body.input;
    doublyLinkedList.append(append);
    return res.status(200).json('appended');
}

exports.eject = (req, res) => {
    const getLength = doublyLinkedList.length();
    doublyLinkedList.removeAt(getLength - 1);
    return res.status(200).json(`eject`);
}

exports.pop = (req, res) => {
    doublyLinkedList.removeAt(0);
    return res.status(200).json(`eject`);
}
