import server from '../server';

const app = server();

app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err as any);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
