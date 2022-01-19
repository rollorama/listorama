import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {FieldsPage} from '../fields/fields.page';
import {StructurePage} from '../structure/structure.page';
import {db} from '../../components/services/db';
import {mc} from '../../components/services/mc';

@Component({
  selector: 'app-tables',
  templateUrl: 'tables.page.html',
  styleUrls: ['tables.page.scss']
})

export class TablesPage implements OnInit {
  public NEW = 0
  public UPDATE = 1
  public fieldsArr: Array<any> = []

  constructor(
    public modalController: ModalController,
    public router: Router,
    public db: db,
    public mc: mc) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.load()
  }

  load() {
    this.mc.data.dbParms = {
      className: this.mc.data.tablesDef.className
    }
    this.db.getAll().then(() => {
    })
  }

  new() {
    this.mc.data.header = this.mc.data.tablesDef.headers[this.NEW]
    this.mc.data.obj = null
    this.mc.data.objInd = this.mc.data.db.tables.length
    this.fields()
  }

  update(item, i) {
    this.mc.data.header = this.mc.data.tablesDef.headers[this.UPDATE]
    this.mc.data.obj = item
    this.mc.data.objInd = i
    this.fields()
  }

  async fields() { // add/update this record from tables
    this.mc.data.fieldsDef = this.mc.data.tablesDef
    let modal = await this.modalController.create({
      component: FieldsPage
    });
    return await modal.present();
  }

  delete(ind) { // delete this record from tables
    this.mc.data.objInd = ind
    this.db.delete().then(() => {

    })
  }

  async structure(item) { // go to structure of chosen table
    this.childDef(item)
    this.mc.data.fieldsDef = this.mc.data.childDef
    console.log(this.mc.data.fieldsDef)
    let modal = await this.modalController.create({component: StructurePage, cssClass: 'wide-modal'});
    return await modal.present();
  }

  records(item) {
    this.childDef(item)
    this.mc.data.recordsDef = this.mc.data.childDef
    this.router.navigate(['records']);
  }

  childDef(item) {
    this.mc.data.currentClass = item.name
    this.mc.data.childDef = {
      className: this.mc.data.currentClass,
      public: true,
      title: item.description,
      headers: ['New', 'Update'],
      fields: item.fields
    }
  }
}
