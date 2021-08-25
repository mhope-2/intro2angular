import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text = "app"

  updateValue(e: any){
    this.text = e.target.value
    console.log(e.target.value)
  }

}
