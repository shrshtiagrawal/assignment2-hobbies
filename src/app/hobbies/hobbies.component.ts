import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }
  data = [];
  ngOnInit(): void {
  }
  store(newValue: string) {
    this.data.push(newValue.split(","));
    console.log(this.data)
  }

}

