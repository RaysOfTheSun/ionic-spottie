import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.page.html',
  styleUrls: ['./user-library.page.scss']
})
export class UserLibraryPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  public handleItemClick(): void {
    this.navController.navigateForward([
      'content-user',
      'user-library-content-overview'
    ]);
  }
}
