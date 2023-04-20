import {Injectable} from '@angular/core';
import {ClickService} from './click.service';

@Injectable()
export class UsersService {
  activeUsers = [
    {
      name: 'ster Account',
      status: 'active',
    },
    {
      name: 'Hidden Account',
      status: 'active',
    },
    {
      name: 'Rdsdbfbrtn',
      status: 'active',
    },
    {
      name: 'Pojdvnsjhv444',
      status: 'active',
    },
  ];

  inactiveUsers = [
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Rdsdbfbrtn',
      status: 'inactive',
    },
    {
      name: 'Pojdvnsjhv444',
      status: 'inactive',
    },
  ];

  constructor(private clickService: ClickService) {}

  setActive(id: number) {
    console.log('this.inactiveUsers[id]', this.inactiveUsers[id]);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.clickService.logInactiveToActive();
  }
  setInActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.clickService.logActiveToInactive();
  }
}
