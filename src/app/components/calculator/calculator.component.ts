import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    buttons = [
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '.', '0', 'C', '/',
        '='
        
    ];

    expression = '';

    calc(event:any){

        if( (event.target as HTMLInputElement).value == '=' ){
            this.expression = eval(this.expression);
        }

        else if( (event.target as HTMLInputElement).value == 'C' ){
            this.expression = '';
        }

        else{
            this.expression += (event.target as HTMLInputElement).value;
        }

        
    }

}
