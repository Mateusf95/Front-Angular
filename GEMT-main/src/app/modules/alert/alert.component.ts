import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertData, AlertType } from 'src/app/data-acess/dtos/alert.dto';
import { AlertService } from 'src/app/services/shared/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private readonly alertService: AlertService) {}

  data: alertData = {
    text: '' ,
    type: AlertType.SUCCESS,
    visible: false,
  };

  ngOnInit() {
    this.alertService.alertState$.subscribe((value)=> {
      if(value){
        this.data = {
          ...value,
          visible: true
        }
        setTimeout(() => {
          this.data.visible = false;
        }, 3500);
      }else{
        this.data.visible = false;
      }
    })
  }

  get isSuccess(): boolean{
    return this.data?.type === AlertType.SUCCESS
  }

}

interface alertData{
  text: string ;
  type: AlertType;
  visible?: boolean;
}
