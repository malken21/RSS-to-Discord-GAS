function sendDiscord(url, text) {
    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload(text))
    };
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    Logger.log(`ResponseCode: ${responseCode}`);
}