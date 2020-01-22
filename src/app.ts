import * as statement from './statement'; 
import * as invoices from './data/invoices.json'; 
import * as plays from './data/plays.json'; 

console.log(statement.statement(invoices[0], plays));
