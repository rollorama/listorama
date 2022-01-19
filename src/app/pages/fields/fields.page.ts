import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {mc} from '../../components/services/mc';
import {db} from '../../components/services/db';


@Component({
  selector: 'app-fields',
  templateUrl: './fields.page.html',
  styleUrls: ['./fields.page.scss'],
})

export class FieldsPage implements OnInit {

  public fields = []
  public Record: {}

    constructor(public modalController: ModalController,
              public db: db,
              public mc: mc) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    let len = this.mc.data.fieldsDef.fields.length
    this.fields = []
    let inputField = this.mc.data.fieldsDef.fields[1]
    for (let i = 0; i < len; i++) {
      let inputField = this.mc.data.fieldsDef.fields[i]
      if (this.mc.data.obj) {
        if (this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name]) {
          inputField.value = this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name]
        }
      }
      this.fields.push(inputField)
    }
  }

  save(fld) {
    this.mc.data.obj  = this.buildObj()
    this.db.save().then(() => {
      this.close()
    })
  }

  close() {
    this.modalController.dismiss();
  }

  buildObj(){
     let obj = {}
     let len = this.fields.length
     for (let i = 0; i < len; i++) {
       let fld = this.fields[i]
       obj[fld.name] = fld.value
     }
     return obj
  }
}
