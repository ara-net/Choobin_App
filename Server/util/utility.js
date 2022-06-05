const Log = require('./Logger');
const { ToPersian } = require('./PersianCalendar')

map = (source, dest, excludeList = []) => {
    let propertyList = Object.getOwnPropertyNames(source).filter(m => !excludeList.includes(m));
    propertyList.forEach(p => {
        dest[p] = source[p];
    })
}

sendResponse = (req, res, data, result = true, code = 200) => {

    req.body.status = code;
    req.body.to = req.body.from;
    req.body.data = data;
    delete req.body.from;

    Log({ type: result ? 'info' : 'error', res: req.body })
    res.status(code).json(
        Object.assign(req.base, {
            result: result,
            data: Array.isArray(data) ? data : [data]
        }))
}

generateNo = (no = '') => {
    let currentYear = ToPersian(new Date().toISOString()).substring(0, 4);
    if (!no)
        return currentYear + '0001';
    if (no.length < 8)
        return 'Invalid number';
    let lastNoYear = no.substring(0, 4);
    return currentYear != lastNoYear
        ? currentYear + '0001'
        : (parseInt(no) + 1).toString();
}

module.exports = {
    Map: map,
    SendResponse: sendResponse,
    GenerateNo: generateNo
}