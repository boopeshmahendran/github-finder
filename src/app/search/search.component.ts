import { Component} from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ GithubService ]
})
export class SearchComponent {
  private users: User[]; 
  constructor(private githubService: GithubService) {
  }
  searchUsers(username: string) {
      this.githubService.getUsers(username)
                        .subscribe(res => {
                              this.users = res.items;
                         })
  }
}
