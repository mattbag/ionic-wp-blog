// import { DummyComponent } from './../../components/dummy/dummy';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
    // DummyComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
    
  ],
})
export class HomePageModule {}
