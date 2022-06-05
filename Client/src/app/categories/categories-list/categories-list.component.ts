import { CategoryService } from '../category.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Category } from 'app/models/Category';
import { Subscription } from 'rxjs';
type FormMode = shared.util.customTypes.FormMode;
@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @ViewChild('closeEditModal', null) closeEditModal: ElementRef<HTMLElement>;
  categories: Category[];
  currentCategory: Category = new Category();
  formMode: FormMode = 'none'
  sub$: Subscription;

  constructor(private categoryService: CategoryService) {
    this.LoadData();
  }

  async LoadData() {
    let data = await this.categoryService.GetAllCategories().toPromise();
    this.categories = data.data;
  }
  SetCurrentCategory(category) {
    this.formMode = 'edit';
    this.currentCategory = category
  }

  Save(formData) {
    if (this.formMode == 'edit') {
      formData.id = this.currentCategory.id;
      this.sub$ = this.categoryService.Update(formData)
        .subscribe(m => {
          if (m.result) {
            this.Reset();
          }
        })
    }
    else {
      this.sub$ = this.categoryService.Add(formData)
        .subscribe(m => {
          if (m.result) {
            this.Reset();
          }
        })
    }
  }

  Add() {
    this.currentCategory = new Category();
    this.formMode = 'add';
  }
  Reset() {
    this.LoadData();
    this.currentCategory = new Category();
    this.closeEditModal.nativeElement.click();
    this.formMode = 'none';
  }
  ngOnInit() {
    if (this.sub$)
      this.sub$.unsubscribe();
  }

}
