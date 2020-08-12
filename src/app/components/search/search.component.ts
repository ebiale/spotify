import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading = false;
  error = false;
  errorMsg = '';

  constructor(private spotyService: SpotifyService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    if (term) {
      this.loading = true;
      this.spotyService.searchArtist(term).subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err.error.error.message;
      })
    } else {
      this.artists = [];
    }

  }
}
