import { Component, inject } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FrutaApi } from '../../../services/fruta-api';
import { FrutaModel } from '../../../models/fruta-model';

@Component({
  selector: 'app-fruta-create',
  imports: [Header, Footer, FormsModule],
  templateUrl: './fruta-create.html',
  styleUrl: './fruta-create.css'
})
export class FrutaCreate {

  private readonly frutaApi = inject(FrutaApi);
  private readonly router = inject(Router);

  fruta: FrutaModel = {Id : 0, Nome : '', DataVenc : new Date()};

  Add(){
    this.frutaApi.Add(this.fruta).subscribe({
      next: (fruta: FrutaModel) => {
        alert(`Fruta ${fruta.Nome} adicionada com sucesso!`);
        this.GoToIndex();
      },
      error: (erro) => {
        console.error(`Error ${erro} ao adicionar fruta - contate o suporte técnico.`);
      }
    });
  }

  GoToIndex(){
    this.router.navigate(['/frutas']);
  }
}
