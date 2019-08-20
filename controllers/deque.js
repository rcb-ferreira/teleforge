const { __contructor } = require('../utils/helpers');

exports.show = (req, res) => {
    return res.status(200).json('show');
}
exports.prepend = (req, res) => {
    const data = req.body.input;
    
    __contructor(data);
    
    return res.status(200).json(`prepend done`);
}
exports.pop = (req, res) => {
    return res.status(200).json('pop');
}
exports.append = (req, res) => {
    return res.status(200).json('append');
}
exports.eject = (req, res) => {
    return res.status(200).json('eject');
}
