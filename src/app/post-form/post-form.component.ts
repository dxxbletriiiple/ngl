import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';
import { Post } from './../app.component';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
	@Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

	@ViewChild('titleInput') titleRef!: ElementRef;
	@ViewChild('textInput') textRef!: ElementRef;

	title: string = '';
	text: string = '';

	addPost = () => {
		if (this.title.trim() && this.text.trim()) {
			const post: Post = {
				title: this.title,
				text: this.text,
			};
			this.onAdd.emit(post);
		}
		this.textRef.nativeElement.value = '';
		this.titleRef.nativeElement.value = '';
	};

	focusInput = () => {
		this.titleRef.nativeElement.focus();
	};
}
