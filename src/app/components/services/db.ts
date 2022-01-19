import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';

import {promise} from 'protractor';
import {resolve} from '@angular/compiler-cli';
import {rejects} from 'assert';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {firebaseConfig} from '../../../assets/data/const'

import {mc} from './mc';

@Injectable()
export class db {

  public client
  public tables

  constructor(
    public afdb: AngularFireDatabase,
    public router: Router,
    public mc: mc,
    public zone: NgZone ) {

  }

//====================================================
// DB FUNCTIONS
//====================================================
  getAll() {
    this.mc.data.swOK = false
    return new Promise<void>(resolve => {
      if (this.mc.data.db[this.mc.data.dbParms.className]){
        this.mc.data.swOK=true
        resolve()
      }else{
        this.afdb.list(this.mc.data.dbParms.className).valueChanges().subscribe(items=>{
          this.mc.data.db[this.mc.data.dbParms.className] = items
          this.mc.data.swOK = true
          resolve()
        })
      }
      resolve()
    })
  }

  save(): Promise<void> {
    this.mc.data.swOK = false
    return new Promise<void>(resolve => {
      let path = this.mc.data.dbParms.className + '/' +  this.mc.data.objInd
      let ref = this.afdb.object(path);
      ref.set(this.mc.data.obj);
        resolve()
      })
  }

  delete(): Promise<any> {
    this.mc.data.swOK = false
    return new Promise<void>(resolve => {
      let path = this.mc.data.dbParms.className + '/' +  this.mc.data.objInd
      let ref = this.afdb.object(path);
      ref.set(null);
        resolve()
      })
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

