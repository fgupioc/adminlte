import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmpresaModalComponent} from '../../empresa-modal/empresa-modal.component';
import {ShowEmpresa} from '../../models/show-empresa';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    empresa: ShowEmpresa ;
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
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
    }

    modalCreate() {
        const modal = this.modalService.open(EmpresaModalComponent, {centered: true});
        modal.result.then(
            this.modalClose.bind(this),
            this.modalClose.bind(this)
        );
    }

    modalEdit(empresa: ShowEmpresa) {
        const modal = this.modalService.open(EmpresaModalComponent, {centered: true});
        modal.result.then(
            this.modalClose.bind(this),
            this.modalClose.bind(this)
        );
        modal.componentInstance.createMode = false;

        modal.componentInstance.empresa = empresa;
    }

    modalClose(response) {
        if(!response.createMode) {
            let index = this.empresas.findIndex(value => value.code == response.empresa.code);
            console.log(index)
            this.empresas[index] = response.empresa;
        }else{
            this.empresas.push(response.empresa);
        }
    }
}
