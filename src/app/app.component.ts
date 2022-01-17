import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {db} from './components/services/db';
import {mc} from './components/services/mc';
import {appConfig} from '../assets/data/const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public onReady: boolean = false;
  public appPages = [
    {
      title: 'Tables',
      url: '/tables',
      icon: 'server'
    },

  ];

  constructor(
    public router: Router,
    public db: db,
    public mc: mc) {
    // this.db.getDB()
    if (window.location.hostname=='localhost'){
      this.mc.data.server=1
    }else{
      this.mc.data.server=0
    }
    this.mc.data.currentClass='tables'
    this.mc.data.tablesDef=appConfig.tablesDef
    this.mc.data.structureDef=appConfig.structureDef

    this.db.init().then(() => {

    })

  }

  logout() {
    this.db.logout().then(() => {
    })
  }

  github() {
    window.open(appConfig.githubURL, '_system')
  }

}
