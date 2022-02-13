export interface ApiResponse<T> {
  success: boolean;
  errorcode: number;
  errorstring: string;
  response: T;
}
