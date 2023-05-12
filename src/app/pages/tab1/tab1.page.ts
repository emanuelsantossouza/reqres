
import { IonicModule } from '@ionic/angular';
import { ReqresService } from '../../services/reqres.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../models/User';
import { RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterLink],
})
export class Tab1Page {

  listaDadosUsuario: User[] = [];

  constructor(private servico: ReqresService, private alertCtrl: AlertController) {
    this.buscarUsuarios()
  }

  IonOnView() { }

  buscarUsuarios() {
    this.servico.getAll().subscribe(respostaApi => {
      this.listaDadosUsuario = respostaApi.data as User[];
    });
  }


  deleteProduto(id: number) {
    this.servico.delete(id).subscribe((dados) =>console.log(dados))
  }

  async AlertDeleteUser(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'Você como usuario, tem certeza do que esta fazendo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.deleteProduto(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
