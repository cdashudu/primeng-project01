import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/core/models/user.model';
import { UserIdleService } from 'angular-user-idle';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;



  constructor(
    private router: Router,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService) {


  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopWatching();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }


  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }



}
