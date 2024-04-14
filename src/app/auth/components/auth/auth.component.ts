import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {AppStateInterface} from '../../../../shared/models/appState.interface'
import {isSubmittingSelector} from '../../store/selectors'
import {AuthService} from '../../services/auth.service'
import {RegisterRequestInterface} from '../../models/registerRequest.interface'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form!: FormGroup
  isSubmitting$!: Observable<Boolean>
  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }

    this.store.dispatch(registerAction({request}))
  }
}
