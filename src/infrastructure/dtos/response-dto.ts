export type ResponseDto<T, E> = {
  data?: T;
  errors?: E;
  errorMessage?: string;
};
