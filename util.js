function sendDiscord(url, text) {
    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload(text))
    };
    UrlFetchApp.fetch(url, options);
}