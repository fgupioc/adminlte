import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    empresa ;
    empresas = [
        {
            code: '00001',
            name: 'empresa 1',
            ruc: '12345678912',
            state: 1
        },
        {
            code: '00002',
            name: 'empresa 2',
            ruc: '12345678912',
            state: 1
        },
        {
            code: '00003',
            name: 'empresa 3',
            ruc: '12345678912',
            state: 1
        },
        {
            code: '00004',
            name: 'empresa 4',
            ruc: '12345678912',
            state: 0
        },
        {
            code: '00005',
            name: 'empresa 5',
            ruc: '12345678912',
            state: 1
        },
    ];

    constructor(

    ) {
    }

    ngOnInit() {
    }

}
