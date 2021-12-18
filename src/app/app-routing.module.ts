import { ContactPage } from './pages/contact/contact.component';
import { MorePage } from './pages/more/more.component';
import { AboutmePage } from './pages/aboutme/aboutme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'aboutme', component: AboutmePage },
  { path: 'more', component: MorePage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
