import { Component } from '@angular/core';

export interface Post {
	title: string;
	text: string;
	id?: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	posts: Post[] = [
		{
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architect',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto',
			id: 1,
		},
		{
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto nesciunt alias a officiis.',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto asdas',
			id: 2,
		},
	];
}
