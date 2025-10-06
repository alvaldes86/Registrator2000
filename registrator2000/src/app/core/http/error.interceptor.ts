import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        // For example: clear token and redirect
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Adjust route as needed
      }
      else if (error.status === 403) {
        console.error('Access denied.');
      }
      else if (error.status === 500) {
        console.error('Server error:', error.message);
      }
      else {
        console.error('HTTP Error:', error);
      }

      // Always rethrow the error so subscribers know it failed
      return throwError(() => error);
    })
  );
};
