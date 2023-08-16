import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/data-acess/models/pedido.model';
import { RequestService } from 'src/app/services/http/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  public cardTitle = "Pedidos";
  public imagePath: string;

  public arrPedidos: Pedido[];
  public arrFormRegister = [];

  public objFormRegister: FormGroup;
  public objPedidos: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private readonly requestService: RequestService
  ){

      this.objFormRegister = this.formBuilder.group({
          name    : [null, Validators.required]
        , lastName: [null, Validators.required]
        , address : [null, Validators.required]
        , contact : [null, Validators.required]
        , request : [null, Validators.required]
      });

      this.objPedidos = this.formBuilder.group({
          name    : []
        , lastName: []
        , address : []
        , contact : []
        , request : []
      });

      this.imagePath = '/assets/images/pedido.png'


  }

  ngOnInit( ): void {
    this.getPedidos();
  }

  getPedidos = () => {
    this.requestService.getAll().subscribe(res => {
      this.arrPedidos = res;
    });
  }
  onSubmit() {
    this.requestService.create(this.objFormRegister.value).subscribe(value => console.log(value));
    console.log(this.objFormRegister.value);
  }
}


