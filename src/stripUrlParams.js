const stripUrlParams = (url, paramsToStrip = []) => {
    let match;
    const params = {};
    const regex = /[?&](\w+)=(\w+)/g;

    while (match = regex.exec(url)) {
        if (!params[match[1]] && !paramsToStrip.includes(match[1])) {
            params[match[1]] = match[2];
        }
    }

    const paramsKeys = Object.keys(params);

    return url.split('?')[0]
        + (paramsKeys.length ? '?' : '')
        + paramsKeys.map(key => `${key}=${params[key]}`).join('&')
};

module.exports = {
    stripUrlParams,
};
