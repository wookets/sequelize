var AbstractDialect = function() {
}

AbstractDialect.prototype.supports = {
  'RETURNING': false,
  'DEFAULT': true,
  'DEFAULT VALUES': false,
  'VALUES ()': false,
  'OUTPUT INSERTED': false,
  ignoreDuplicates: false
}

module.exports = AbstractDialect
