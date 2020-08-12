import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  songs: any;
  loading = true;
  error = false;
  errorMsg = 'Unknown Error';

  constructor(private spotyService: SpotifyService) {
    this.spotyService.getNewReleases().subscribe((data: any) => {
      this.songs = data;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.errorMsg = err.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
