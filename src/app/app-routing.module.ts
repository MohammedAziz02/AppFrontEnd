import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DataTableComponent } from './home/data-table/data-table.component';
import { FileUploaderComponent } from './home/file-uploader/file-uploader.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path: "", redirectTo: "signin", pathMatch: "full"
  },
  {
    path: "signin", component: SignInComponent,
  },
  {
    path: "signup", component: SignUpComponent
  },
  {
    path: "home", component: HomeComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "datatable", component: DataTableComponent
      },
      {
        path: "fileupload", component: FileUploaderComponent
      },
      {
        path: "", redirectTo: "dashboard", pathMatch: "full"
      }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
