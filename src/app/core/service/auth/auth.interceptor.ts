import { DOCUMENT } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../../models/user';

let token: string = ''
const bearer = 'Bearer'


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const document: Document = inject(DOCUMENT)
  const localStorage = document.defaultView?.localStorage
  let user: User = {}

  let userInfo = localStorage?.getItem('userInfo')

  if (userInfo) {
    user = JSON.parse(userInfo!)
    if (user.access_token) {
      token = `${bearer} ${user.access_token}`
    }
  }

  const reqClone = req.clone({
    headers: req.headers.set('Authorization', token)
  })

  return next(reqClone);

};
