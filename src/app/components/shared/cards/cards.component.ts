import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() type: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  openArtist(id: string) {
    this.router.navigate(['/artist', id])
  }

  openGenre(id: string, event) {
    this.router.navigate(['/genre', id]);
    event.stopPropagation();
  }
}
