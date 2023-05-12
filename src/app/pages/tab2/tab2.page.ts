import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { ReqresService } from '../../services/reqres.service';
import { ResponseCreate } from '../../models/ResponseCreate';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule]
})
export class Tab2Page {

  name: string = "";
  job: string = "";

  constructor(private userServices: ReqresService) { }

  salvar() {
    const newUser: ResponseCreate = {
      name: this.name,
      job: this.job,
    }

    this.userServices.create(newUser).subscribe((dados) => {
      console.log(dados);
    })
  }
}
