import { Component, inject } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { FrutaApi } from '../../../services/fruta-api';
import { FrutaModel } from '../../../models/fruta-model';

@Component({
  selector: 'app-fruta-index',
  imports: [Header,Footer,CommonModule,FormsModule,RouterLink],
  templateUrl: './fruta-index.html',
  styleUrl: './fruta-index.css'
})
export class FrutaIndex {

  private readonly router: Router = inject(Router);
  private frutaApi : FrutaApi = inject(FrutaApi);
  
  frutas: FrutaModel[] = [];
  id: number | string = '';
  nome: string = '';
  dataVenc: Date = new Date();

  Search() :void {
    if (this.id !== '' && this.id !== null){
      this.SearchById(this.id);
      return;
    }
    
    if (this.nome !== ''){
      this.SearchByName(this.nome);
      return;
    }

    this.SearchAll();    
  }

  SearchById(id: number | string): void{
    this.frutaApi.GetById(id).subscribe({
      next: (fruta: FrutaModel) => {
        this.frutas = [fruta];
      }
    })
  }

  SearchByName(nome:string): void{
    this.frutaApi.GetByName(nome).subscribe({
      next: (frutas:FrutaModel[]) => {
        this.frutas = frutas;
      }
    });
  }

  SearchAll(): void{
    this.frutaApi.GetAll().subscribe({
      next: (frutas:FrutaModel[]) => {
        this.frutas = frutas;
      }
    });
  }

  GoToCreate() :void {
    this.router.navigate(['/frutas/create']);
  }

  ConfirmDelete(id:number): void{
    if (confirm(`Deseja excluir a fruta ${id}?`)){
      this.Delete(id);
    }
  }

  Delete(id:number): void{
    this.frutaApi.Delete(id).subscribe({
      next: () => {
        this.Search();  
        alert("Fruta excluído com sucesso!");        
      }
    })
  }

}
