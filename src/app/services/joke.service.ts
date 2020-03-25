import { Injectable } from '@angular/core';
import { Joke } from '../joke';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  jokesUrl = "https://official-joke-api.appspot.com/jokes/ten";

  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.jokesUrl)
  }
}
