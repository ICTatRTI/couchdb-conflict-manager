import './src/couchdb-conflict-manager.js'
const config = require('./config.json') 
document.body.innerHTML = `
  <style>
    * { 
      --mdc-theme-secondary: #333;
    }
  </style>
  <couchdb-conflict-manager dbUrl="${config.dbUrl}"></couchdb-conflict-manager>
`
