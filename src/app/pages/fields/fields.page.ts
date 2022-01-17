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
  public swOK: boolean = false

  constructor(public modalController: ModalController,
              public db: db,
              public mc: mc) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    // let len = this.mc.data.fieldsDef.fields.length
//     this.fields = []
//     for (let i = 0; i < len; i++) {
// //added value
//       let inputField = {name: null, type: null, label: null, size: null, dbType: null, value: null}
//       inputField.name = this.mc.data.fieldsDef.fields[i].name
//       inputField.type = this.mc.data.fieldsDef.fields[i].type
//       inputField.label = this.mc.data.fieldsDef.fields[i].label
//       inputField.size = this.mc.data.fieldsDef.fields[i].size
//       if (this.mc.data.obj) {
//         if (this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name]) {
//           // if (this.mc.data.fieldsDef.fields[i].dbType == 'Array') {
//           //   inputField.value = this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name].join('|')
//           // } else {
//           //   inputField.value = this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name]
//           // }
//           inputField.value = this.mc.data.obj[this.mc.data.fieldsDef.fields[i].name]
//         }
//       }
//       this.fields.push(inputField)
//     }
    this.swOK = true
  }

  save() {
    // this.mc.data.dbParms.obj = {}
    // let len = this.mc.data.fieldsDef.fields.length
    // for (let i = 0; i < len; i++) {
    //   if (this.mc.data.fieldsDef.fields[i].dbType == 'Array') {
    //     let obj = JSON.parse(JSON.stringify(this.fields[i].value))
    //     //console.log(obj)
    //     this.mc.data.dbParms.obj[this.mc.data.fieldsDef.fields[i].name] = obj
    //   } else {
    //     this.mc.data.dbParms.obj[this.mc.data.fieldsDef.fields[i].name] = this.fields[i].value
    //   }
    // }
    // if (this.mc.data.obj) {
    //   this.mc.data.dbParms.obj.id = this.mc.data.obj.id
    // }
    this.db.save().then(() => {
      this.close()
    })
  }

  close() {
    this.modalController.dismiss();
  }
}
