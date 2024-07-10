import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PricingPolicyComponent } from './pricing-policy/pricing-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsServicesComponent } from './terms-services/terms-services.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  {path:'',component:CompanyLayoutComponent, children:[
    {path:'about_us', component:AboutUsComponent, title:'About us'},
    {path:'privacy_policy', component:PrivacyPolicyComponent, title:'Privacy Policy'},
    {path:'pricing_policy', component:PricingPolicyComponent, title:'Pricing policy'},
    {path:'refund_policy', component:RefundPolicyComponent, title:'Refund policy'},
    {path:'terms_condition', component:TermsServicesComponent, title:'Terms Services'},
    {path:'disclaimer', component:DisclaimerComponent, title:'Disclaimer of Website'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
