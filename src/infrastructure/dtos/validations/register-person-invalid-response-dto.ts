export type RegisterPersonInvalidResponseDto =
  | {
      errors: ValidationItem[];
    }
  | undefined;

export type ValidationItem = {
  propertyName: string;
  errorMessage: string;
};
