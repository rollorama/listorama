import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {db} from '../../components/services/db';
import {mc} from '../../components/services/mc';

@Component({
  selector: 'app-structure',
  templateUrl: 'structure.page.html',
  styleUrls: ['structure.page.scss']
})

export class StructurePage implements OnInit {
  public NEW = 0
  public UPDATE = 1

  constructor(
    public modalController: ModalController,
    public db: db,
    public mc: mc) {
  }

  ngOnInit() {
    this.mc.data.swOK = true
  }

  ionViewDidEnter() {
    this.load()
  }

  load() {

  }

  new() {

  }

  save() {

  }

  close() {
    this.modalController.dismiss();
  }

  delete(item) {

  }

}
