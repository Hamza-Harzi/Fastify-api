const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");
//import items from Items.js
const items = require("../Items");

//item schema

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemsOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};
function itemRoutes(fastify, options, done) {
  //to create a route

  // get all items
  // argiment 1 "/items" = route | argiment 2: getItemsOpts option(schema) | argiment 3 : (req, reply) hundler li ena hatha fi l getItemsOpts
  fastify.get("/items", getItemsOpts);

  //get single items
  fastify.get("/items/:id", getItemOpts);

  //Add item
  fastify.post("/items", postItemOpts);

  //Delete item
  fastify.delete("/items/:id", deleteItemsOpts);

  //Delete item
  fastify.put("/items/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
