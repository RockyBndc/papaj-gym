import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipDetailsComponent } from './membership-details/membership-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'memDetails', component: MembershipDetailsComponent },
  { path: 'products/:productId', component: RegisterComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    GalleryComponent,
    HomepageComponent,
    RegisterComponent,
    MembershipComponent,
    ContactComponent,
    MembershipDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
