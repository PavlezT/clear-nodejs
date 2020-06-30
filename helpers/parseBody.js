module.exports = (request) => {
    return new Promise((resolve, reject) => {
        let body = [];

        request.on('error', (err) => {
            reject(err);
          }).on('data', (chunk) => {
            body.push(chunk);
          }).on('end', () => {
            body = Buffer.concat(body).toString();
            try {
              body = JSON.parse(body);
              request.body = body;
            } catch(error) {
              request.text = body;
            }

            resolve(body);
          });
    })
}