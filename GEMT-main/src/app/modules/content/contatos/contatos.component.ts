import { UserService } from './../../../services/http/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

}
