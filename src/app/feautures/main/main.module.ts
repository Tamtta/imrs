import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { TranslateModule } from "@ngx-translate/core";
import { DriverRegComponent } from './components/driver-reg/driver-reg.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [MainPageComponent, DriverRegComponent, FeaturesComponent],
  imports: [CommonModule, MainRoutingModule, TranslateModule],
})
export class MainModule {}
