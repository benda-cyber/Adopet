import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";
import { User } from "@app/models";

@Injectable({ providedIn: "root" })
export class UserService {
  private baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/`);
  }

  get(id: string) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}