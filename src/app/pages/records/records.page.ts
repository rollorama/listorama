import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {FieldsPage} from '../fields/fields.page';

import {db} from '../../components/services/db';
import {mc} from '../../components/services/mc';

@Component({
  selector: 'app-records',
  templateUrl: 'records.page.html',
  styleUrls: ['records.page.scss']
})

export class RecordsPage implements OnInit {
  public NEW = 0
  public UPDATE = 1
  public swOK:boolean=false

  constructor(
    public modalController: ModalController,
    public db: db,
    public mc: mc) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.load()
  }

  load() {
    //console.log(this.mc.data.recordsDef)
    let start = Math.floor(Date.now())
    this.mc.data.dbParms = {
      className: this.mc.data.recordsDef.className
    }
    this.db.getAll().then(() => {
      let end = Math.floor(Date.now())
      let dur = end - start
        // console.log(this.mc.data.db[this.mc.data.dbParms.className])
      this.swOK=true
    })
  }

  new() {
    this.mc.data.header = this.mc.data.recordsDef.headers[this.NEW]
    this.mc.data.obj = null
    this.fields()
  }

  update(item,i) {
     this.mc.data.header = this.mc.data.recordsDef.headers[this.UPDATE]
     this.mc.data.obj = item
     this.mc.data.objInd = i
     this.fields()
  }

  async fields() {
    this.mc.data.fieldsDef = this.mc.data.recordsDef
    const modal = await this.modalController.create({
      component: FieldsPage
    });
    return await modal.present();
  }

  delete(item) {
    this.db.delete(item).then(() => {
    })
  }

}
