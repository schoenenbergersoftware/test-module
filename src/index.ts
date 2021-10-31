const configuration: object = {
    "type": "meat-and-filler", "start-with-lorem": 1
}

export async function loremIpsum(config: object = configuration) {
    let response = await fetch("https://baconipsum.com/api/", {
        "body": JSON.stringify(config)
    })

    let data = await response.json()
    return data;
}