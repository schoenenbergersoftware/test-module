const axios = require("axios");
const configuration: object = {
    type:<string> "meat-and-filler", "start-with-lorem":<number> 1
}

export async function loremIpsum(config: object = configuration) {
    let response: any = await axios.get("https://baconipsum.com/api/");
    
    return response;
}