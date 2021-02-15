import fastify from 'fastify';

import * as hello from './lib/hello';

export default function () {
  const app = fastify({
    logger: true
  });

  app.get('/', (request, reply) => {
    app.log.info('FOOO');
    reply.send({
      hello: hello.world()
    });
  });

  return app;
}
