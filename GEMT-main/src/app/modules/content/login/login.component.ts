import { AlertService } from './../../../services/shared/alert.service';
import { UserService } from './../../../services/http/user.service';
import { UserLoginDto } from './../../../data-acess/dtos/user-login.dto';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pipe, take, catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public contentView = 1;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly userService: UserService,
    private readonly alertService: AlertService,
    private readonly router: Router
  ) {}

  @Output() loginSubmitEvent = new EventEmitter<UserLoginDto>();

  loginForm: FormGroup = this._fb.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required, Validators.minLength(5)]],
  });

  public criarContaForm: FormGroup = this._fb.group({
    name : [null, Validators.required                           ],
    email: [null, Validators.required],
    senha: [null, [Validators.required, Validators.minLength(5)]]
  })

  ngOnInit(): void {

  }

  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get senha(): AbstractControl {
    return this.loginForm.get('senha')!;
  }

  get emailCriar(): AbstractControl {
    return this.criarContaForm.get('email')!;
  }
  get nameCriar(): AbstractControl {
    return this.criarContaForm.get('name')!;
  }

  get senhaCriar(): AbstractControl {
    return this.criarContaForm.get('senha')!;
  }

  submit() {
    if (this.loginForm.valid) {

      this.userService
        .login({ ...this.loginForm.value })
        .pipe(
          take(1),
          catchError((errorResponse) => {
            console.log(errorResponse);
            this.alertService.error('Usuário e senha inválidos');
            throw new Error(errorResponse);
          })
        )
        .subscribe(
          (user) => {
            console.log('Usuário Logado', { user });
            this.alertService.success(`Bem-vindo de volta, ${user.name}`);
            console.log('teste',{ ...this.loginForm.value });
            this.userService.setLogedUser(user);
            this.router.navigate(['/content'])
          }
          //vou fazer o BACK retornar o nome e daí vou colocar o nome do usuario logado no Header
        );
    }
  }

  onSubmit() {
    this.userService.create(this.criarContaForm.value).subscribe(value => console.log(value));
    this.contentView = 1;
    this.alertService.success(`Conta criada com sucesso!`);
    console.log(this.criarContaForm.value);
  }

  viewCriarConta = () => {
    this.contentView = 2;
  }

  closeCriarConta = () => {
    this.contentView = 1;
  }
}
