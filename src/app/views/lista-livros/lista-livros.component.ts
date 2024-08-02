import { Subscription } from 'rxjs';
import { LivroService } from './../../service/livro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = '';
  subscription: Subscription

  constructor(private livroService: LivroService) { }

  buscarLivros() {
    this.livroService.buscar(this.campoBusca).subscribe({
      next: retornoAPI => console.log(),
      error: erro => console.log(erro),
      complete: () => console.log('Observable completado')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}



