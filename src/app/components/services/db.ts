import {Injectable, NgZone} from '@angular/core';
import {promise} from 'protractor';
import {resolve} from '@angular/compiler-cli';
import {rejects} from 'assert';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';



import {firebaseConfig} from '../../../assets/data/const'
import {mc} from './mc';
import {Router} from '@angular/router';


@Injectable()
export class db {

  public client
  public tables

  constructor(
    public afdb: AngularFireDatabase,
    public router: Router,
    public mc: mc,
    public zone: NgZone
  ) {

  }

  getDB(){
    let path = "tables"
    this.afdb.list(path).valueChanges().subscribe(tables=>{
      console.log(tables)
    })
  }

//====================================================
// PARSE DB FUNCTIONS
//====================================================
  getAll() {
    return new Promise<void>(resolve => {
      if (this.mc.data.db[this.mc.data.dbParms.className]){
        console.log('in if')
        resolve()
      }else{
        this.afdb.list(this.mc.data.dbParms.className).valueChanges().subscribe(items=>{
          this.mc.data.db[this.mc.data.dbParms.className] = items
          console.log(items)
          resolve()
        })
      }

     //  if (this.mc.data.db[this.mc.data.dbParms.className]) {
     //    //console.log('getting ' + this.mc.data.dbParms.className + ' from cache')
     //   resolve()
     // } else {
     //    this.mc.data.db[this.mc.data.dbParms.className] = []
     //    // console.log('getting ' + this.mc.data.dbParms.className + ' from database')
     //    let dataClass = Parse.Object.extend(this.mc.data.dbParms.className);
     //    let query = new Parse.Query(dataClass);
     //    query.find({}).then((data) => {
     //      let len = data.length;
     //      for (let i = 0; i < len; i++) {
     //        this.mc.data.db[this.mc.data.dbParms.className].push(data[i])
     //      }
     //    })
     //    // console.log(this.mc.data.db[this.mc.data.dbParms.className])
     //    let sub = this.client.subscribe(query)
     //    sub.on('update', (obj) => {
     //      // console.log('===update===')
     //    })
     //    sub.on('create', (obj) => {
     //      // console.log('===create===')
     //      this.mc.data.db[this.mc.data.dbParms.className].push(obj)
     //    })
     //    sub.on('delete', (obj) => {
     //      // console.log('===delete===')
     //      let len = this.mc.data.db[this.mc.data.dbParms.className].length;
     //      for (let i = 0; i < len; i++) {
     //        if (this.mc.data.db[this.mc.data.dbParms.className][i].id == obj.id) {
     //          this.mc.data.db[this.mc.data.dbParms.className].splice(i, 1);
     //          break;
     //        }
     //      }
     //    })
     //  }
      resolve()
    })
  }

  save(): Promise<void> {
    return new Promise<void>(resolve => {
      console.log('in save')
      let path = this.mc.data.dbParms.className + '/' +  this.mc.data.objInd
      let ref = this.afdb.object(path);
      console.log(path)
      console.log(this.mc.data.obj)


// set() for destructive updates
      ref.set(this.mc.data.obj);
        // let dataClass = Parse.Object.extend(this.mc.data.dbParms.className);
      // let obj = new dataClass();
      // obj.save(this.mc.data.dbParms.obj, {}).then((res) => {
      //   console.clear()
        resolve()
      })
   // })
  }

  delete(obj): Promise<any> {
    return new Promise<void>(resolve => {
      // obj.destroy({}).then((res) => {
      //   console.clear()
        resolve()
      })
   // })
  }

//====================================================
// PARSE USER FUNCTIONS
//====================================================
  getCurrentUser() {
    this.mc.data.user=null
    // return new Promise<void>(resolve => {
    //   this.mc.data.user = Parse.User.current();
    //   resolve()
    // })
  }

  signup(parms) {
    return new Promise<void>(resolve => {
      // let user = new Parse.User();
      // user.set("username", parms.username)
      // user.set("password", parms.password)
      // Parse.User.logOut(user.username).then((o) => {
      //   Parse.User.signUp(user.username, user.password).then((u) => {
      //       this.mc.data.user = u
      //       resolve()
      //     })
      //     .catch((err) => {
      //       this.mc.data.msg=err.message
      //       resolve()
      //     })
      // })
      resolve()
    })
  }

  login(parms) {
    return new Promise<void>(resolve => {
      // let user = new Parse.User()
      // user.set("username", parms.username)
      // user.set("password", parms.password)
      // Parse.User.logOut(user.username).then((o) => {
      //   Parse.User.logIn(user.username, user.password).then((u) => {
      //     this.mc.data.user = u
      //     resolve()
      //   }).catch((err) => {
      //     this.mc.data.msg=err.message
      //     resolve()
      //   })
      // })
      resolve()
    })
  }

  logout() {
    return new Promise<void>(resolve => {
      // let user = new Parse.User();
      // user.set("username", this.mc.data.user.username)
      // Parse.User.logOut(user.username).then((o) => {
      //   this.mc.data.user=null
      //   this.router.navigateByUrl('/login');
      //   resolve()
      // })
      //   .catch((err) => {
      //     resolve()
      //   })
      resolve()
    })
  }

//====================================================
// PARSE INITIALIZATION FUNCTIONS
//====================================================
  initParse() {
    return new Promise<void>(resolve => {
      //Parse.initialize(appConfig.appId[this.mc.data.server], appConfig.javascriptKey[this.mc.data.server])
      resolve()
    })
  }

  initParseServer() {
    return new Promise<void>(resolve => {
      //Parse.serverURL = appConfig.serverURL[this.mc.data.server]
      resolve()
    })
  }

  initParseLiveQuery() {
    return new Promise<void>(resolve => {
      // this.client = new Parse.LiveQueryClient({
      //   applicationId: appConfig.appId[this.mc.data.server],
      //   serverURL: appConfig.liveQueryURL[this.mc.data.server],
      //   javascriptKey: appConfig.javascriptKey[this.mc.data.server]
      // })
      resolve()
    })
  }

  init(){
    return new Promise<void>(resolve => {
       this.mc.data.db = {}
      this.mc.data.user= {}
      // this.mc.data.user = null
      // this.initParse().then(() => {
      //   this.initParseServer().then(() => {
      //     this.initParseLiveQuery().then(() => {
      //       this.client.open()
      //       this.getCurrentUser().then(() => {
      //         if (!this.mc.data.user) {
      //           this.router.navigateByUrl('/login');
      //           resolve()
      //         }
      //       })
      //     })
      //   })
      // })
      resolve()
    })
  }

}

