import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { BuildsOverviewComponent } from './pages/builds-overview/builds-overview.component';
import {DxDataGridModule, DxSelectBoxModule} from "devextreme-angular";
import { DeploysOverviewComponent } from './pages/deploys-overview/deploys-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildsOverviewComponent,
    DeploysOverviewComponent
  ],
    imports: [
        BrowserModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        SingleCardModule,
        FooterModule,
        ResetPasswordFormModule,
        CreateAccountFormModule,
        ChangePasswordFormModule,
        LoginFormModule,
        UnauthenticatedContentModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        DxSelectBoxModule,
        DxDataGridModule,
    ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
