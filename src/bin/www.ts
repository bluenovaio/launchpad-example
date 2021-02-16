import server from '../server';

const app = server();

app.listen(8080, (err, address) => {
  if (err) {
    app.log.error(err as any);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
