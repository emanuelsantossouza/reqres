import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReqresService } from '../services/reqres.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private servico: ReqresService) {
    this.buscarUsuarios()
  }

  buscarUsuarios() {
    this.servico.getAll().subscribe(dados => {
      console.log(dados);
    })
  }
}
