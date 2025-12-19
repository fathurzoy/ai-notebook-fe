export interface BaseResponse<T> {
  status: number
  message: string
  code: number;
  data: T
}