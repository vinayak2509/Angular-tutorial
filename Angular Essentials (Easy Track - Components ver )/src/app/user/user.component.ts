import {
  Component,
  Input,
  computed,
  output,
  EventEmitter,
} from '@angular/core';
import { User } from './user.mode';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}