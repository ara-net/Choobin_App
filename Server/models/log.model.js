const mongoose = require('mongoose');
const { db, app_mode } = require('../app-setting')

url = app_mode == 'dev' ?
  `mongodb://${db.dev.log.address}/${db.dev.log.name}` :
  `mongodb://${db.deploy.userName}:${db.deploy.password}@${db.deploy.log.address}/${db.deploy.log.name}?authSource=admin`;

console.log("log-url", url)

const con = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true })

const logSchema = new mongoose.Schema({
  type: { type: String, required: true, lowercase: true, enum: ['error', 'warning', 'info', 'bcts'], default: 'info' },
  root: { type: String, required: true },
  message: { type: {} }, //{"title":"something...", "detail": "something..."}
  date: { type: Date, default: new Date() },
  read: { type: Boolean, default: false },
  req: { type: {} },
  res: { type: {} },
  client: { type: {} }
});

const logModel = con.model(`${new Date().toLocaleDateString().split('/').join('_')}`, logSchema);
module.exports = logModel;
