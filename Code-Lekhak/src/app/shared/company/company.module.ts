import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { CompanySidebarComponent } from './company-sidebar/company-sidebar.component';
import { PricingPolicyComponent } from './pricing-policy/pricing-policy.component';
import { TermsServicesComponent } from './terms-services/terms-services.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialListModule } from '../material-list/material-list.module';
import { HomepageModule } from '../../homepage/homepage.module';


@NgModule({
  declarations: [
    CompanyLayoutComponent,
    CompanySidebarComponent,
    PricingPolicyComponent,
    TermsServicesComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    DisclaimerComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialListModule,
    HomepageModule
  ]
})
export class CompanyModule { }
