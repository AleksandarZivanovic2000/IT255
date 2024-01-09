import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:3000/sobe"
  constructor(private http: HttpClient) { }

  public getRooms(): Observable<Room[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        this._createRoomFromObject(item))),
    );
  }

  public getRoom(id: number): Observable<Room> {
    return this.http.get<any>(this.baseUrl + '/' + id).pipe(map((data: any) => this._createRoomFromObject(data)))
  }

  public deleteRoom(id: number): Observable<Room> {
    return this.http.delete<any>(this.baseUrl + '/' + id).pipe(map((data: any) => this._createRoomFromObject(data)))
  }

  public addRoom(room: Room): Observable<Room> {
    return this.http.post<any>(this.baseUrl, room).pipe(map((data: any) => this._createRoomFromObject(data)));
  }

  public updateRoom(updatedRoom: Room): Observable<Room> {
    return this.http.put<Room>(this.baseUrl, updatedRoom).pipe(map((data:any)=> this._createRoomFromObject(data)));
  }

  private _createRoomFromObject(item: any) {
    return new Room(item.id, item.naziv, item.cena);
  }
}
