export type InteractorResult<T> = (result: T)=>void
export type InteractorError = (error: ErrorResult)=>void

export interface ErrorResult {
  message?: string
  errors?: [Error]
}

export interface Error {
  key?: string
  message?: string
}

export interface InteractorListener<T> {
  result: InteractorResult<T>
  error?: InteractorError
}