import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientCategoryPricing } from 'src/app/class/client-category-pricing';
import { ClientServiceService } from 'src/app/client_service/client-service.service';

@Component({
  selector: 'app-modify-category-pricing',
  templateUrl: './modify-category-pricing.component.html',
  styleUrls: ['./modify-category-pricing.component.css']
})
export class ModifyCategoryPricingComponent implements OnInit {
  dataCP:ClientCategoryPricing;
  c_complexity_category = '';
  c_description = '';
  c_market_price = '';
  c_ce_price = '';
  public fbFormGroup = this.fb.group({
    c_complexity_category:[this.c_complexity_category, Validators.required],
    c_description:[this.c_description, Validators.required],
    c_market_price:[this.c_market_price, Validators.required],
    c_ce_price:[this.c_ce_price, Validators.required]
  });
  id;
  constructor(private clientService: ClientServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getCategoryPricingById(this.id).subscribe(res=>{
      console.log(res);
      this.dataCP = res;
    console.log('before',this.dataCP.c_ce_price);
      // this.c_complexity_category = (string)this.dataCP.c_complexity_category
    });

    console.log('after',this.dataCP);
    
  }

  submitForm(){
    console.log('submit');
    const data = this.fbFormGroup.value;
    console.log('data',data);
    this.clientService.modifyCategoryPricing(this.id,data).subscribe(res=>{
      console.log(res);
      alert('update successfully !!');
      this.router.navigate(['categorys_pricings']);
    });
  }

}
