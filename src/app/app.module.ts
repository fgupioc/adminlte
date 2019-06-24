import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/layouts/header/header.component';
import {MenuComponent} from './components/layouts/menu/menu.component';
import {ContentComponent} from './components/layouts/content/content.component';
import {FooterComponent} from './components/layouts/footer/footer.component';
import {SettingComponent} from './components/layouts/setting/setting.component';
import {EmpresaModalComponent} from './components/empresa-modal/empresa-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        ContentComponent,
        FooterComponent,
        SettingComponent,
        EmpresaModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        EmpresaModalComponent
    ]
})
export class AppModule {
}
