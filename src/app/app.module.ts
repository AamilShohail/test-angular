import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindComponent } from './bind/bind.component';
import { ProperbindComponent } from './properbind/properbind.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaymodelbindingComponent } from './twowaymodelbinding/twowaymodelbinding.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ParentComponent } from './componentinteraction/parent/parent.component';
import { ChildComponent } from './componentinteraction/child/child.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindComponent,
    ProperbindComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    TwowaymodelbindingComponent,
    NgifComponent,
    NgforComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
