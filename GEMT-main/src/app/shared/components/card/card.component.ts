import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/data-acess/models/pedido.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() set arrPedidos(value:Pedido[]){
    this.pedidos = value;
    console.log(this.pedidos)
  }
  @Input() public cardTitle: string;


  public pedidos: Pedido[]


  constructor() { }

  ngOnInit(): void {
  }



}
