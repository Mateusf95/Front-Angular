import { UserService } from './../../services/http/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pedido } from 'src/app/data-acess/models/pedido.model';
import { DonationService } from 'src/app/services/http/donation.service';
import { RequestService } from 'src/app/services/http/request.service';
import { Doacao } from 'src/app/data-acess/models/doacoes.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public arrPedidos: Pedido[];
  public arrDoacoes: Doacao[];
  constructor(
    private readonly userService    : UserService,
    private readonly donationService: DonationService,
    private readonly requestService : RequestService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems = () => {
    this.requestService.getAll().subscribe(res => {
      this.arrPedidos = res;
    });
    this.donationService.getAll().subscribe(res => {
      this.arrDoacoes = res;
    });
  }
}
