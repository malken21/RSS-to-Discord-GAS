const LINK_MAP = {
    "RSS URL": "Discord Webhook URL"
}

// Discordに送信される payload
const payload = text => {
    return {
        "content": `${text}`
    }
}