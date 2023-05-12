import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResponseCreate } from 'src/app/models/ResponseCreate';
import { ReqresService } from 'src/app/services/reqres.service';
import { ResponseUpdate } from 'src/app/models/ResponseUpdate';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarUsuarioPage implements OnInit {
  name?: string;
  job!: string;

  constructor(private userServices: ReqresService) { }

  ngOnInit() {
  }

  salvar() {
    const updateUser: ResponseUpdate = {
      name: this.name,
      job: this.job,
    }

    this.userServices.create(updateUser).subscribe((dados) => {
      console.log(dados);
    })
  }
}
