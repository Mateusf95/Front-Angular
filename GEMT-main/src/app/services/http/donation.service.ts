import { CreateUpdateDoacaoDto } from './../../data-acess/dtos/create-update-doacoes.dto';
import { Observable } from 'rxjs';
import { Doacao } from './../../data-acess/models/doacoes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DonationService {

constructor(private readonly http: HttpClient) { }

getAll(): Observable<Doacao[]>{
  return this.http.get<Doacao[]>('doacoes');
}

getById(id: number): Observable <Doacao>{
  return this.http.get<Doacao>(`doacao/${id}`);
}

create(dto: CreateUpdateDoacaoDto): Observable<Doacao>{
  return this.http.post<Doacao>(`create-doacao`, dto);
}

update(dto: CreateUpdateDoacaoDto): Observable<Doacao>{
  return this.http.post<Doacao>(`doacao/update/${dto.id}`, dto);
}

delete(id: number): Observable<string>{
  return this.http.delete<string>(`doacao/delete/${id}`);
}

}
