import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {db} from '../../components/services/db';
import {mc} from '../../components/services/mc';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username
  public password

  constructor(
    public router: Router,
    public db: db,
    public mc: mc) {
  }

  ngOnInit() {
    this.mc.data.msg = ' '
  }

  signup() {
    this.mc.data.msg = ' '
    let user = {
      username: this.username,
      password: this.password
    }
    this.db.signup(user).then(() => {
      this.continue()
    })
  }

  login() {
    this.mc.data.msg = ' '
    let user = {
      username: this.username,
      password: this.password
    }
    this.db.login(user).then(() => {
      this.continue()
    })
  }

  continue() {
    if (this.mc.data.user) {
      this.router.navigateByUrl('/');
    }
  }
}
