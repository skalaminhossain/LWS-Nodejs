const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url == "/"){
        res.writeHead(200,"Content-Type : text/html")
        res.write("Hello Server")
        res.end()
    }else if(req.url == '/about'){
        res.write("about page")
        res.end()
    }

})

server.listen(3000)

console.log("Server is running");