import { Component } from '@angular/core';
import {CountryService} from "../../../demo/service/country.service";

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {

    selectedCountryAdvanced: any[] = [];
    filteredCountries: any[] = [];
    countries: any[] = [];

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
    }


    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
