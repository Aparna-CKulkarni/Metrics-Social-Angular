import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule } from '@angular/material';

@NgModule({
    exports: [
        MatSidenavModule,
        MatIconModule
    ]
    })
export class AppMaterialModule{}