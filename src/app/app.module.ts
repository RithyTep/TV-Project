import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDisplayComponent } from './main-display/main-display.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { RedirectComponent } from './redirect-component/redirect-component.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BtnCharthubComponent } from './share-btn/btn-charthub/btn-charthub.component';
import { TestComponent } from './test/test.component';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    RedirectComponent,
    SidenavComponent,
    NavbarComponent,
    BtnCharthubComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,MatProgressBarModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions(getApp(), 'asia-east2')),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
