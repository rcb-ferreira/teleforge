const { __contructor, setNext, getNext, removeItem, insert } = require('../utils/helpers');

exports.show = (req, res) => {
    return res.status(200).json('show');
}

exports.prepend = (req, res) => {
    const data = req.body.input;
    const nodes = __contructor(data);
    const setNode = setNext(nodes);

    if (setNode) {
        const getNodes = getNext();
        return res.status(200).json(getNodes);
    }
}

exports.pop = (req, res) => {
    const removeFirst = removeItem('f');
    return res.status(200).json(removeFirst);
}

exports.append = (req, res) => {
    const data = req.body.input;
    const nodes = getNodes();
    const newStream = insert(data, nodes);
    return res.status(200).json(newStream);
}

exports.eject = (req, res) => {
    return res.status(200).json('eject');
}
