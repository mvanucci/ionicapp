import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionselect',
  templateUrl: './ionselect.page.html',
  styleUrls: ['./ionselect.page.scss'],
})
export class IonselectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

}
