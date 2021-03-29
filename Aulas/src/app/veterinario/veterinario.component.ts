import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  @Input() animalespecie;
  constructor() { }

  ngOnInit(): void {
  }
  animalAtual:string;
}
