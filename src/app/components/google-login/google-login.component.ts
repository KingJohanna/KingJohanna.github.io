import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})

export class LogInComponent implements OnInit {
  constructor(public authService: AuthService) { }
  ngOnInit() { }
}