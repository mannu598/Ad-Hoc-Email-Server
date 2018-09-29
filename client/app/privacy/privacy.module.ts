import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    CoreModule,
    PrivacyRoutingModule
  ],
  declarations: [PrivacyPolicyComponent]
})
export class PrivacyModule { }
