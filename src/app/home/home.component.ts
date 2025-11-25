import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DetailComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
