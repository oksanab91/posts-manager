import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '@models/models';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
  private url = ''
  private postsList: Post[] = [];
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'text/plain'      
  })

  constructor(private http: HttpClient) { }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'text/plain'      
    })
  }

  getPosts(filter: string, pageNum: number): Observable<Post[]> {
    this.setHeaders()
    
    pageNum = pageNum === 0 ? 1 : pageNum
    if (filter) {
      this.url = `${environment.apis.api_url}/posts/${filter}/${pageNum}`
    } else {
      this.url = `${environment.apis.api_url}/posts/${pageNum}`
    }

    return this.http.get<Post[]>(this.url,  {headers: this.headers})
  }
  removePost(postId: string): Observable<Post[]>{
    this.url = `${environment.apis.api_url}/posts/${postId}`

    return this.http.delete<Post[]>(this.url,  {headers: this.headers})
  }
}

const list = [
  {id: '1', header: 'Post 1', author: 'Au1', details: 'pos 1', date: '10/10/2021'},
  {id: '2', header: 'Post 2', author: 'Au1', details: 'pos 2', date: '10/09/2021'},
  {id: '3', header: 'Post 3', author: 'Au1', details: 'pos 3', date: '10/08/2021'},
  {id: '4', header: 'Post 4', author: 'Au1', details: 'pos 4', date: '10/07/2021'},
  {id: '5', header: 'Post 5', author: 'Au1', details: 'pos 5', date: '10/11/2021'},
  {id: '1', header: 'Post 1', author: 'Au1', details: 'pos 1', date: '10/10/2021'}]