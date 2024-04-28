import { Component, Input } from '@angular/core'
import { BackendErrorsInterface } from '../../../../../shared/models/backendErrors.interface'

@Component({
  selector: 'rd-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent {
  @Input('backendErrors') backendErrorsProp!: BackendErrorsInterface | null

  public errorMessages: string[] = []
  public ngOnInit(): void {
    if (this.backendErrorsProp)
      this.errorMessages = Object.keys(this.backendErrorsProp).map(
        (prop: string) => {
          let messages = ''
          if (this.backendErrorsProp && this.backendErrorsProp[prop])
            messages = this.backendErrorsProp[prop].join(', ')
          return `${prop} ${messages}`
        },
      )
  }
}
