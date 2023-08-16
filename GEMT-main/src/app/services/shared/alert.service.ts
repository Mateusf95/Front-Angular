import { AlertComponent } from './../../modules/alert/alert.component';
import { AlertType } from './../../data-acess/dtos/alert.dto';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertState$ = new BehaviorSubject<alertData | null>(null);

  success(text: string){
    this.alertState$.next({text,type: AlertType.SUCCESS})
  }

  error(text: string){
    this.alertState$.next({text,type: AlertType.ERROR})
  }

}



interface alertData{
  text: string ;
  type: AlertType;
}
// type: AlertType.ERROR
