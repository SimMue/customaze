import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MetaEntityApiService } from '../meta-entity-api.service';

enum FormState {
  Initial,
  Create,
  Update,
}

@Component({
  selector: 'app-meta-entity-detail',
  templateUrl: './meta-entity-detail.component.html',
  styleUrls: ['./meta-entity-detail.component.scss'],
})
export class MetaEntityDetailComponent implements OnInit {
  form: FormGroup;
  private formState = FormState.Initial;
  private params!: Params;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: MetaEntityApiService
  ) {
    this.form = formBuilder.group({
      displayName: [undefined, Validators.required],
    });
  }

  async ngOnInit() {
    await this.init();
  }

  async save() {
    switch (this.formState) {
      case FormState.Create:
        await this.create();
        break;
      case FormState.Update:
        await this.update();
        break;
      default:
        throw Error('Unsupported form state');
    }

    this.router.navigate(['meta-entity']);
  }

  private async init() {
    this.params = this.route.snapshot.params;
    this.initFormState(this.params);
    await this.initForm(this.params);
  }

  private async create() {
    await this.apiService.create({
      displayName: this.form.controls.displayName.value,
    });
  }

  private async update() {
    await this.apiService.update({
      guid: this.params.guid,
      displayName: this.form.controls.displayName.value,
    });
  }

  private initFormState(params: Params) {
    this.formState = params?.guid ? FormState.Update : FormState.Create;
  }

  private async initForm(params: Params) {
    switch (this.formState) {
      case FormState.Create:
        this.updateForm('');
        break;
      case FormState.Update:
        const dto = await this.apiService.findOne(params?.guid);
        this.updateForm(dto.displayName);
        break;
      default:
        throw Error('Unsupported form state');
    }
  }

  private async updateForm(displayName: string) {
    this.form.controls.displayName.setValue(displayName);
  }
}
