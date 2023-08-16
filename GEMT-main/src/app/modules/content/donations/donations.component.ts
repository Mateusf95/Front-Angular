import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doacao } from 'src/app/data-acess/models/doacoes.model';
import { DonationService } from 'src/app/services/http/donation.service';
import { RequestService } from 'src/app/services/http/request.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  public cardTitle = "Doações";
  public imagePath: string;
  public arrPedidos: Doacao [];
  public arrFormRegister =  [];

  public objFormRegister: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly donationService: DonationService,
    private readonly userService: UserService,
    private readonly requestService: RequestService

  ) {
    this.objFormRegister = this.formBuilder.group({
      name    : [null, Validators.required]
    , lastName: [null, Validators.required]
    , address : [null, Validators.required]
    , contact : [null, Validators.required]
    , request : [null, Validators.required]
  });

    this.imagePath = '/assets/images/donation.png'
   }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos = () => {
    this.donationService.getAll().subscribe(res => {
      this.arrPedidos = res;
    });
  }
  onSubmit() {
    this.donationService.create(this.objFormRegister.value).subscribe(value => console.log(value));
    console.log(this.objFormRegister.value);
  }
}
