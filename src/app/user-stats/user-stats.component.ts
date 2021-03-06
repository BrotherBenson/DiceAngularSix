import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../shared/models/record';
import { User } from '../shared/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {
  @Input() user: User; 
  record: Record;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.record = this.userService.getRecord(this.user);
  }
}
