import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from 'src/app/Shared/action.service';
import { HighlightDirective } from 'src/app/Shared/highlight.directive';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  actionService: ActionService = inject(ActionService);
  action: string = 'Done';
  toggle(){
    this.action = this.actionService.changeAction();
  }
}
