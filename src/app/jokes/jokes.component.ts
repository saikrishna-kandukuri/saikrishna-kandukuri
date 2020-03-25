import { Component, OnInit } from '@angular/core';

/* Internal App Modules */
import { Joke } from '../joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  jokes: Joke[] = [];
  selectedJoke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {

    this.jokeService.getJokes()
      .subscribe(jokes => this.jokes = jokes);
  }

  onSelect(joke: Joke): void {
    this.selectedJoke = joke;
  }

}
