import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Room } from '../models/Room';
import { ApiService } from '../services/api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve rooms from the API via GET', () => {
    const dummyRooms: Room[] = [
      new Room(1, 'Room 1', 100),
      new Room(2, 'Room 2', 150),
    ];

    service.getRooms().subscribe(rooms => {
      expect(rooms.length).toBe(2);
      expect(rooms).toEqual(dummyRooms);
    });

    const request = httpMock.expectOne('http://localhost:3000/sobe');
    expect(request.request.method).toBe('GET');
    request.flush(dummyRooms);
  });

  it('should add a new room via POST', () => {
    const newRoom: Room = new Room(1, 'New Room', 200);

    service.addRoom(newRoom).subscribe(room => {
      expect(room).toEqual(newRoom);
    });

    const request = httpMock.expectOne('http://localhost:3000/sobe');
    expect(request.request.method).toBe('POST');
    request.flush(newRoom);
  });

  it('should update an existing room via PUT', () => {
    const updatedRoom: Room = new Room(1, 'Updated Room', 250);

    service.updateRoom(updatedRoom).subscribe(room => {
      expect(room).toEqual(updatedRoom);
    });

    const request = httpMock.expectOne('http://localhost:3000/sobe');
    expect(request.request.method).toBe('PUT');
    request.flush(updatedRoom);
  });

  it('should delete an existing room via DELETE', () => {
    const roomId = 1;

    service.deleteRoom(roomId).subscribe(room => {
      expect(room.id).toBe(roomId);
    });

    const request = httpMock.expectOne(`http://localhost:3000/sobe/${roomId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush({ id: roomId });
  });
});