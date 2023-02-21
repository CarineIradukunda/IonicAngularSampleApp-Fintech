import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { CanLoad, Router } from '@angular/router';
import { Observable, filter, take, map } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataSaved = false;
  public userForm: any;
  message = null;
  router: any;
 
  constructor(private formbulider: FormBuilder, private userservice: UserService) { }



  ngOnInit() {
    this.userForm = this.formbulider.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userservice.authenticate(this.userForm.value).subscribe((res: any) => {

      this.message;

    })
  }


//   onFormSubmit(): Observable<boolean> {
 
//     return 
//       filter((val) => val !== null), // Filter out initial Behaviour subject value
//       take(1), // Otherwise the Observable doesn't complete!
//       this.userservice.authenticate(this.userForm.value).subscribe((res: any) => {
//         if (AuthenticatorResponse) {
//           return true;
//         } else {
//           this.router.navigateByUrl('/login');
//           return false;
//         }
//       })
// }
}
