const http = require ('http');

const requestListener=async (req, res) => {
  console.log(req);
}

const server = http.createServer()
 server.listen(3000)