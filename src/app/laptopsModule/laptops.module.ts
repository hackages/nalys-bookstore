import { LaptopstoreComponent } from './../laptopsModule/components/laptopstore/laptopstore.component';
import { LaptopComponent } from './../laptopsModule/components/laptop/laptop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedModule/shared.module';

@NgModule({
  declarations: [LaptopComponent, LaptopstoreComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class LaptopsModule {}
