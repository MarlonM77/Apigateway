const authResolver      = require('./authResolver')
const productResolver   = require('./productResolver')
const lodash            = require('lodash')

const resolvers         = lodash.merge(authResolver, productResolver);

module.exports = resolvers;