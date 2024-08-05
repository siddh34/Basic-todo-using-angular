import { Component, computed, Input, input, EventEmitter, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // old angular syntax
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar}`);

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
