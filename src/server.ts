import fastify from 'fastify';

import * as hello from './lib/hello';

export default function () {
  const app = fastify();

  app.get('/', (request, reply) => {
    reply.send({
      hello: hello.world()
    });
  });

  return app;
}
