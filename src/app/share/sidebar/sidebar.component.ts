import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {
  get historial(){
   return this.GifsService.historial;
  }
  constructor(private GifsService:GifsService) { }
  buscar(ar:string){
    this.GifsService.buscarGifs(ar);

  }

}
