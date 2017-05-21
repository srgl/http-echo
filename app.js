const http = require('http')  
let i = 0

const requestHandler = (request, response) => {
  let data = {
    _i: (i += 1),
    _t: new Date(),
    method: request.method,
    url: request.url,
    httpVersion: request.httpVersion,
  }

  data = JSON.stringify(Object.assign(data, request.headers), null, 2)
  response.end(data)
  console.log(data)
}

http.createServer(requestHandler).listen(80, err => {  
  console.log('Echo server is listening')
})