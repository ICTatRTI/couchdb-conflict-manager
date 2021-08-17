import './src/couchdb-conflict-manager.js'
const config = require('./config.json') 
document.body.innerHTML = `
  <couchdb-conflict-manager dbUrl="${config.dbUrl}"></couchdb-conflict-manager>
`
