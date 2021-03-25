const crudPagesGenerator = require('./plop/crud-pages-generator')
const layoutGenerator = require('./plop/layout-generator')
const vuexModuleGenerator = require('./plop/vuex-module-generator')

module.exports = function (plop) {
  crudPagesGenerator(plop)
  layoutGenerator(plop)
  vuexModuleGenerator(plop)
};

