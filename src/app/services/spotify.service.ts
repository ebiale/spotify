import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders(
      {
        'Authorization': 'Bearer QDvrenFFCDVJ3VYU_DazG5VsxhtbxeHnJ2UBZMHI1Yqq2b_xBSvwSO5GDvApKsRsbYGgOceSjm1rBvMgL8'
      });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  searchArtist(txt: string) {
    return this.getQuery(`search?q=${txt}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=IL`).pipe(
      map((data: any) => data.tracks));
  }
}
