import { expect } from "chai";
import { JSDOM } from "jsdom";
import fs from "fs";

describe("our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html test case", () => {
  it("should check h1 inner text", () => {
    const indexFile = fs.readFileSync("./src/index.html", "utf-8");
    const jsdomIns = new JSDOM(indexFile);
    const h1 = jsdomIns.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello json hello json hello");
    jsdomIns.window.close();
  });
});
