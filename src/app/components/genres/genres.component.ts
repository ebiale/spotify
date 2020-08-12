import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styles: [
  ]
})
export class GenresComponent implements OnInit {

  genres: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
