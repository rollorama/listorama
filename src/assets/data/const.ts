// parameter "server" contains index for all other parse parameters
// [0]=back4app,[1]=localhost
export var appConfig = {
  githubURL: 'https://github.com/rollorama/listorama#listorama-',
  server: 1,
  dashboard: ['https://parse-dashboard.back4app.com/apps/dec41cfd-f885-4801-b7e9-1a4502fca596/browser', 'http://localhost:1337/dashboard', 'http://144.91.73.117:1337/dashboard'],
  serverName: ['back4app', 'localhost', '144.91.73.117'],
  appId: ['RTAneFGrcSoos5lGcCOAqNFMD4A4ScnjfGk7L9Us', 'totparse', 'totparse'],
  javascriptKey: ['n7EqKkcouMdSTIluYLH40bv9Y0bzCchaXtPsDJno', 'totparseKey', 'totparseKey'],
  serverURL: ['https://parseapi.back4app.com', 'http://63.250.61.95:1337/parse', 'http://144.91.73.117:1337/parse'],
  masterKey: ['BOMGdortyqtseCLXg57OTlWcfAo6KwbTswAWjIeN', 'totparseKey', 'totparseKey'],
  liveQueryURL: ['wss://tot.b4a.io', 'ws://63.250.61.95:1337/parse', 'ws://144.91.73.117:1337/parse'],
  tablesDef: {
    className: 'tables',
    public: true,
    title: 'Tables',
    headers: ['Define a new Table', 'Update Table'],
    fields: [
      {name: 'name', type: 'text', label: 'Table Name', size: 2, dbType: 'text', hide:false, protect:false, key:true},
      {name: 'description', type: 'text', label: 'Table Description', size: 3, dbType: 'text', hide:false, protect:false, key:false},
      {name: 'fields', type: 'text', label: 'Fields', size: 0, dbType: 'Array', hide:true, protect:false, key:false},
    ]
  },
  structureDef: {
    className: 'structures',
    public: true,
    title: 'Structure',
    fields: [
      {name: 'tableName', type: 'text', label: 'Table Name', size: 2, dbType: 'text', hide:true, protect:false, key:true},
      {name: 'name', type: 'text', label: 'Name', size: 3, dbType: 'text', hide:false, protect:false, key:true},
      {name: 'type', type: 'text', label: 'Type', size: 3, dbType: 'text', hide:false, protect:false, key:false},
      {name: 'label', type: 'text', label: 'Text', size: 3, dbType: 'text', hide:false, protect:false, key:false},
      {name: 'size', type: 'text', label: 'Size', size: 2, dbType: 'text', hide:false, protect:false, key:false},
      {name: 'dbType', type: 'text', label: 'DB type', size: 2, dbType: 'text', hide:true, protect:false, key:false},
      {name: 'hide', type: 'boolean', label: 'Hide field', size: 1, dbType: 'boolean', hide:true, protect:false, key:false},
      {name: 'protect', type: 'boolean', label: 'Protect field', size: 1, dbType: 'boolean', hide:true, protect:false, key:false},
      {name: 'key', type: 'boolean', label: 'Key field', size: 1, dbType: 'boolean', hide:true, protect:false, key:false},
    ]
  }
}

export var firebaseConfig = {
  apiKey: "AIzaSyBUusCCZaOihBTMRbg8FWIyOwDuMD10qIg",
  authDomain: "listorama-c265b.firebaseapp.com",
  projectId: "listorama-c265b",
  storageBucket: "listorama-c265b.appspot.com",
  messagingSenderId: "893034137771",
  appId: "1:893034137771:web:a0c1570352a616a9464fee",
  measurementId: "G-1GFBT5C3BT"
};

