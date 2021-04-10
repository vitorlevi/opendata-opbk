import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import Rx from "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-business-account",
  templateUrl: "./business-account.component.html",
  styleUrls: ["./business-account.component.css"]
})
export class BusinessAccountComponent implements OnInit {
  brand$: Observable<any>;
  companies$: Observable<any[]>;
  bank: String;
  default: String;
  constructor(private afd: AngularFireDatabase) {}

  ngOnInit() {
    this.callContent("itau");
    this.listBrands();
  }

  callContent(bank: String) {
    this.companies$ = this.afd
      .list("business-accounts/" + bank + "/data/brand/companies")
      .snapshotChanges()
      .map(companiesSnapshot => {
        return companiesSnapshot.map(companiesSnapshot => ({
          key: companiesSnapshot.payload.key,
          ...companiesSnapshot.payload.val()
        }));
      });
    // this.busId$ = this.afd.object("bus").valueChanges();
  }

  listBrands() {
    this.brand$ = this.afd
      .list("business-accounts/")
      .snapshotChanges()
      .map(brandSnapshot => {
        return brandSnapshot.map(brandSnapshot => ({
          key: brandSnapshot.payload.key,
          ...brandSnapshot.payload.val()
        }));
      });
  }
  selectBrand(item: any) {
    let data = {};
    // data[item.key];
    // this.afd.object("bus").update(this.bank);
    console.log(item.key);
    // this.bank = item.key;
    this.callContent(item.key);
  }
}
