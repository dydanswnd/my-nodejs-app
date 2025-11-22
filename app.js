const http = require('http');
const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.end('<h1>Hello from GitHub Actions CI/CD!</h1>');
});

server.listen(3000,()=>{
console.log('Server runnung on port 3000');
});
