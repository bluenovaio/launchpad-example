import server from '../server';

const app = server();

app.listen(process.env.PORT as string, '0.0.0.0', (err, address) => {
  if (err) {
    app.log.error(err as any);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
