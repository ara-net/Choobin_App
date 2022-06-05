const errorLoger = require('../middleware/error-loger')

module.exports = app => {
  app.use('/', require('./home'));
  app.use('/api/category', require('./category'));
  app.use('/api/product', require('./product'));
  app.use('/api/store', require('./store'));
  app.use('/api/invoice', require('./invoices'));
  // app.use('/app/log', require('./log'));
  // app.use('/api/user', require('./user'));
  // app.use('/api/auth', require('./authentication'));
  // app.use('/api/al', require('./groupAccessLevel'));
  app.use(errorLoger);
};  
