import { CreateUpdatePedidoDto } from './../../data-acess/dtos/create-update-pedido.dto';
import { Pedido } from './../../data-acess/models/pedido.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

constructor(private readonly http: HttpClient) { }

getAll(): Observable<Pedido[]>{
  return this.http.get<Pedido[]>('pedidos');
}

getById(id: number): Observable <Pedido>{
  return this.http.get<Pedido>(`pedido/${id}`);
}

create(dto: CreateUpdatePedidoDto): Observable<Pedido>{
  return this.http.post<Pedido>(`create-pedido`, dto);
}

update(dto: CreateUpdatePedidoDto): Observable<Pedido>{
  return this.http.post<Pedido>(`pedido/update/${dto.id}`, dto);
}

delete(id: number): Observable<string>{
  return this.http.delete<string>(`delete/pedido/${id}`);
}

}
