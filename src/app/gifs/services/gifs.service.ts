import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = '9P1Xzy2G77FWcx4ZPfIqO9C75DeKCKRQ';

  get historial() {
    return [...this._historial];
  }

  constructor(
    private http: HttpClient
  ){ }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    };

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=9P1Xzy2G77FWcx4ZPfIqO9C75DeKCKRQ&q=dragon ball z&limit=10').subscribe((res: any) => {
      console.log(res.data)
    })


  }
}
