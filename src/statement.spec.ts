import { expect } from "chai";

import * as statement from "./statement";
import * as invoices from "./data/invoices.json";
import * as plays from "./data/plays.json";

describe("First test", () => {
  it("should return summaries", () => {
    const result: string = statement.statement(
        invoices[0], plays);

    const eq: string = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`
    expect(result).to.equal(eq);
  });
});
