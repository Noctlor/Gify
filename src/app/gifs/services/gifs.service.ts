import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Search, Gif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private api_key :string = "74UnRjmXfXSIastewZOXclEa5l825Cf7"
  private sURL : string = "https://api.giphy.com/v1/gifs"
  private _historial:string[] = [];
  public resultados: Gif []=[];

  get historial(){
    
    return [...this._historial]; 
  }
  constructor(private http:HttpClient){ 
    this._historial = JSON.parse(localStorage.getItem('historial')!)|| [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)|| [];
   }
  buscarGifs(query:string=""){
    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){ 
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const params = new HttpParams().set('api_key', this.api_key )
          .set('limit','10')
          .set('q',query);

    this.http.get<Search>(`${this.sURL}/search`,{params})
        .subscribe((resp) =>{
          this.resultados =resp.data;
          localStorage.setItem('resultados',JSON.stringify(this.resultados));
          
          
        }) ;

  }
}
