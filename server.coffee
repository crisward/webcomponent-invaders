http = require('http')
fs = require('fs')
path = require('path')

getContentType = (url)->
  switch path.extname(url)
    when '.html' then 'text/html'
    when '.css' then 'text/css'
    when '.js' then 'text/javascript'
    when '.json' then 'application/json'
    else 'application/octate-stream'

sendResponse = (url, contentType, res)->
  file = path.join(__dirname, url)
  fs.readFile file, (err, content)-> 
    if err
      sendResponse('index.html', 'text/html', res) # default to homepage on not found
    else
      res.writeHead(200, {'Content-Type': contentType});
      res.write(content);
      res.end();
      console.log("Response: 200 #{file}");

requestResponseHandler = (req, res)->
  console.log("Request came: #{req.url}");
  return sendResponse('index.html', 'text/html', res) if req.url == '/'  
  sendResponse(req.url, getContentType(req.url), res)


httpServer = http.createServer(requestResponseHandler)

httpServer.listen 3000,-> console.log "Node.JS static file server is listening on port 3000"
