const fastify = require("fastify")({ logger: true });

//implement the fastify swagger plug-in

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "FASTIFY-API" },
  },
});

// to import items in routes folder
fastify.register(require("./routes/items"));
const PORT = 5000;

//to start up our server
const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
