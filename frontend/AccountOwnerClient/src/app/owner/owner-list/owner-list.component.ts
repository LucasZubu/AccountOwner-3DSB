import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { Owner } from './../../_interfaces/owner.model';
import { OwnerRepositoryService } from './../../shared/services/owner-repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
=======
import { Owner } from './../../_interfaces/owner.model';
import { OwnerRepositoryService } from './../../shared/services/owner-repository.service';
>>>>>>> 7713012396afc9b6a75dbba6bccd3a861b2394a1

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
<<<<<<< HEAD
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  errorMessage: string = '';

  constructor(private repository: OwnerRepositoryService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  private getAllOwners = () => {
    const apiAddress: string = 'api/owner';
    this.repository.getOwners(apiAddress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }
  public getOwnerDetails = (id) => {
    const detailsUrl: string = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }

  public redirectToUpdatePage = (id) => {
    const updateUrl: string = `/owner/update/${id}`;
    this.router.navigate([updateUrl]);
    }
    public redirectToDeletePage = (id) => {
      const deleteUrl: string = `/owner/delete/${id}`;
      this.router.navigate([deleteUrl]);
      }
=======
>>>>>>> 7713012396afc9b6a75dbba6bccd3a861b2394a1

export class OwnerListComponent implements OnInit {
  owners: Owner[];

  constructor(private repository: OwnerRepositoryService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }
  
  private getAllOwners = () => {
    const apiAddress: string = 'api/owner';
    this.repository.getOwners(apiAddress)
      .subscribe(own => {
        this.owners = own;
      })
  }
}
