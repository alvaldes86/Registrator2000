import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  //localStorage.setItem('authToken', '12345'); // For testing purposes
  localStorage.removeItem('authToken'); // For testing purposes
  // Example: Read token from localStorage
  const token = localStorage.getItem('authToken');

  if (token) {
    // Clone the request and add Authorization header
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  // If no token, just pass the original request
  return next(req);
};
