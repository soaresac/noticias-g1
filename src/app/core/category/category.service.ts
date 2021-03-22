import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CategoryService {

    private categorySubject = new BehaviorSubject<string | null>(null);

    constructor() { 
       this.setCategory('mundo');
    }
    
    setCategory(category: string) {
        this.categorySubject.next(category);
    }

    getCategory() {
        return this.categorySubject.asObservable();
    }
}