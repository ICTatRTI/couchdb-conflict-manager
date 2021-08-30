import 'juicy-ace-editor/juicy-ace-editor-module.js'
import './src/couchdb-conflict-manager.js'
const config = require('./config.json') 
document.body.innerHTML = `
  <style>
    * { 
      --mdc-theme-secondary: #333;
    }
  </style>
  <couchdb-conflict-manager dbUrl="${config.dbUrl}" username="${config.username}"></couchdb-conflict-manager>
`
