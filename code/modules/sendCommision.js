export function sendCommision(embed){
    const content = ""
    return fetch("https://discord.com/api/webhooks/1251700053308080179/-12e-v-82jWkz0yY18YNzkWsz3yHCMJmxGD5HYpLatpf7K9_f9Zy1BR-EZHpxUUKhh6X", {
        body: JSON.stringify({
            "embeds": embed
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })
}