import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule {}
