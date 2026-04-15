// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../_')
// service
const Mainservice = { name: 'Mainservice' }
module.exports = Mainservice
module.exports.Mainservice = Mainservice
// SalesOrderHeaders
module.exports.SalesOrderHeader = createEntityProxy(['Mainservice', 'SalesOrderHeaders'], { target: { is_singular: true } })
module.exports.SalesOrderHeaders = createEntityProxy(['Mainservice', 'SalesOrderHeaders'], { target: { is_singular: false }})
// Customers
module.exports.Customer = createEntityProxy(['Mainservice', 'Customers'], { target: { is_singular: true } })
module.exports.Customers = createEntityProxy(['Mainservice', 'Customers'], { target: { is_singular: false }})
// Products
module.exports.Product = createEntityProxy(['Mainservice', 'Products'], { target: { is_singular: true } })
module.exports.Products = createEntityProxy(['Mainservice', 'Products'], { target: { is_singular: false }})
// SalesOrderItems
module.exports.SalesOrderItem = createEntityProxy(['Mainservice', 'SalesOrderItems'], { target: { is_singular: true } })
module.exports.SalesOrderItems = createEntityProxy(['Mainservice', 'SalesOrderItems'], { target: { is_singular: false }})
// events
// actions
// enums
