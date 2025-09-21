import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../auth';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgIf, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public authService: AuthService) {}
}
