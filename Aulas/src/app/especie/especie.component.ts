import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {
  @Input() animalespecie;
  constructor() { }

  ngOnInit(): void {
  }
   animalAtual:string;
}
