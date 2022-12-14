import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

gettopheadlines()
{
  return this.http.get<RespuestaToHeadLines>
  ('https://newsapi.org/v2/everything?q=tesla&from=2022-11-14&sortBy=publishedAt&apiKey=b939ed8c444e4ef2bca97d952b22a495');
}


}