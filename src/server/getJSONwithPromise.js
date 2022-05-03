const requestPromise = require('request-promise')
const fs = require('fs');

const URL = "https://jsonplaceholder.typicode.com/comments"

const readStream = () => {
    let data = '';

    fs.createReadStream('data.txt', 'UTF8')
    .on('data', (chunk) => {
        data += chunk
    })
    .on('end', () => {
        let json = JSON.parse(data);
    })
}

const stream = async (data) => {
    let writeStream = fs.createWriteStream("data.txt");
    writeStream.write(data)
    await readStream()
}

const options = {
    method: 'GET',
    url: URL,
    // json: true, 
}

requestPromise(options)
    .then((response) => {
        stream(response)
    })
    .catch((err) => {
        console.log(err);
    })
