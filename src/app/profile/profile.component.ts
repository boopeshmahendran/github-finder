import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubService } from '../github.service';
import { User } from '../user';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [ GithubService ]
})
export class ProfileComponent implements OnInit {
    private user: User;

    constructor(
        private githubService: GithubService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.githubService.getUser(params['login']))
            .subscribe(user => {console.log(user); this.user = user});
    }
}
