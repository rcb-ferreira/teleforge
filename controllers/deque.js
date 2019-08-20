exports.show = (req, res) => {
    return res.status(200).json('show');
}
exports.prepend = (req, res) => {
    return res.status(200).json('prepend');
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
