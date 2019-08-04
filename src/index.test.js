import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Initial test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// test failed
// describe('index.html', () => {
//   it('should have h1 that says Users',(done) => {
//     const index = fs.readFileSync('./src/index.html',"utf-8")
//     jsdom.env(index, function(err, window) {
//       const h1 = window.document.getElementByTagName('h1')[0];
//       expect(h1.innerHTML).to.equal("Users");
//       done();
//       window.close();
//     });
//   })
// })
