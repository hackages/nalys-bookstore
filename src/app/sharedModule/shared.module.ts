import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponentComponent],
  exports: [HeaderComponent, SearchComponentComponent],
  imports: [CommonModule]
})
export class SharedModule {}
