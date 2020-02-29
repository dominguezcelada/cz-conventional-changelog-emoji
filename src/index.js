"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types-emoji-oscardom');

module.exports = engine({
  types: conventionalCommitTypes.types
});
