import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  loading = true;
  error = false;
  errorMsg = '';
  artist: any = {};
  tracks: any[] = [];

  constructor(private route: ActivatedRoute, private spotyServer: SpotifyService) {
    this.route.params.subscribe(params => {
      this.spotyServer.getArtist(params['id']).subscribe(data => {
        this.artist = data;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err.error.error.message;
      });
      this.spotyServer.getArtistTracks(params['id']).subscribe(data => {
        this.tracks = data;
      }, (err) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err.error.error.message;
      })

    });
  }

  ngOnInit(): void {
  }

}
