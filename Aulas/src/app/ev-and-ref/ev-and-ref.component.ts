import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tamanho:number=200;
  cor:string="white";
  changecolor(corR:string){
    this.cor=corR;
  }

  Aumentar(referencia){
    referencia.style.width = this.tamanho+"px";
    this.tamanho=this.tamanho*2;

  }
  rodar(referencia){
    referencia.className += " girar";

    setInterval(function(){ referencia.classList.remove("girar"); }, 15000);
  }
}
