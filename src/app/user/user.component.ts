import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;ˇ
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => '/users/' + this.avatar());
  // get imagePath() {
  //   return '/users/' + this.avatar;
  // }

  onSelectUser() {}
}
