const http = require('http');

const server = http.createServer((req, res) => {
  const currentDate = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <h1>Hello from GitHub Actions CI/CD!</h1>
    <p>현재 시간: ${currentDate}</p>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
