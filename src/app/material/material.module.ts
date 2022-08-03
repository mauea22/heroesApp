import { NgModule }               from '@angular/core';
import {MatAutocompleteModule}    from '@angular/material/autocomplete';
import {MatButtonModule}          from '@angular/material/button';
import { MatFormFieldModule }     from "@angular/material/form-field";
import {MatGridListModule}        from '@angular/material/grid-list';
import {MatInputModule }          from "@angular/material/input";
import {MatIconModule}            from '@angular/material/icon';
import {MatListModule}            from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule}          from '@angular/material/select';
import {MatSidenavModule}         from '@angular/material/sidenav';
import {MatToolbarModule}         from '@angular/material/toolbar';
import {MatCardModule}            from '@angular/material/card';




@NgModule({
  exports:[
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
  ]

})
export class MaterialModule { }
