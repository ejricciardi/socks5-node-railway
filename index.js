const socks = require('socksv5');

const server = socks.createServer((info, accept, deny) => {
  accept();
});

server.listen(process.env.PORT || 1080, '0.0.0.0', () => {
  console.log('SOCKS5 proxy server listening on port 1080');
});

server.useAuth(socks.auth.None());
