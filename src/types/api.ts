export type ApiResponse<TData> = {
  code: number;
  data: TData;
  error: boolean;
  message: string;
};
