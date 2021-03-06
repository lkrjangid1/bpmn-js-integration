var Helper = require('../helper');

var MiwgHelper = require('../miwg-helper');

var describeSuite = Helper.describeSuite;


function validateDiagram(results, done) {
  try {
    this.validateBasic(results);
    return this.validateBpmn20(results, done);
  } catch (e) {
    return done(e);
  }
}


var miwgReferenceDirectory = MiwgHelper.resourcePath('Reference');


describeSuite(
  'bpmn-miwg-test-suite',
  miwgReferenceDirectory,
  validateDiagram,
  { timeout: 10000 }
);