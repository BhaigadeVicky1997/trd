import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InternationalizationModule } from '../utils/internationalization/internationalization.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    InternationalizationModule.forRoot({ locale_id: localStorage.getItem('language') || 'en-US' }),
  ],
  declarations: [NavbarComponent, FooterComponent, SidebarComponent],
  exports: [NavbarComponent, FooterComponent, SidebarComponent],
})
export class ComponentsModule {}

