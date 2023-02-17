import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent {
	x = 10;

	changeX = (e: any) => {
		console.log(e);
		this.x += 1;
	};
}
