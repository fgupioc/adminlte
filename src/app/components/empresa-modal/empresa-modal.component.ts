import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Empresa} from '../models/empresa';
import {ShowEmpresa} from '../models/show-empresa';

@Component({
    selector: 'app-empresa-modal',
    templateUrl: './empresa-modal.component.html',
    styleUrls: ['./empresa-modal.component.css']
})

export class EmpresaModalComponent implements OnInit {
    createMode = true;
    empresaForm: FormGroup;
    empresa: ShowEmpresa;

    constructor(private formBuilder: FormBuilder,
                public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.empresaForm = this.formBuilder.group({
            ruc: ['', Validators.required],
            name: ['', Validators.required],
            code: ['']
        });

        if (!this.createMode) {
            this.loadEmpresa(this.empresa);
        }
    }

    loadEmpresa(empresa) {
        this.empresaForm.patchValue(empresa);
    }

    saveTodo() {
        if (this.empresaForm.invalid) {
            return;
        }
        if (this.createMode) {
            let item: Empresa = this.empresaForm.value;
            item.createdAt = new Date();
            item.updatedAt = new Date();
            this.successFulSaveEmpresa(item);
        } else {
            let item: ShowEmpresa = this.empresaForm.value;
            item.updatedAt = new Date();
            this.successFulEditEmpresa(item);
        }
    }

    successFulSaveEmpresa(empresa: Empresa) {
        this.activeModal.dismiss({empresa: empresa, createMode: true});
    }

    successFulEditEmpresa(empresa: ShowEmpresa) {
        this.activeModal.dismiss({empresa: empresa, createMode: false});
    }
}
