/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

export interface RequestOptions {
    method: string;
    path: string;
    headers?: { [key: string]: any };
    query?: { [key: string]: any };
    formData?: { [key: string]: any };
    body?: any;
}