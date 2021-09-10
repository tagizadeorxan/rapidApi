module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    // Create a new Customer
    app.post("/billionaires", customers.create);
  
    // Retrieve all Customers
    app.get("/billionaires", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/billionaires/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/billionaires/:customerId", customers.update);
  
    // Delete a Customer with customerId
    app.delete("/billionaires/:customerId", customers.delete);
  
    // Create a new Customer
    app.delete("/billionaires", customers.deleteAll);
  };