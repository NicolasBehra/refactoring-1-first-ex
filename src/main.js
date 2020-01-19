const statement = require('./statement');
const invoices = require('./invoices.json');
const plays = require('./plays.json');


console.log(statement.statement(invoices[0], plays));
