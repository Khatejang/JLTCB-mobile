export type FieldKey = "fullName" | "email" | "contactNumber";

export type Field = {
  label: string;
  key: FieldKey;
};

export type ContactFormData = {
  [K in FieldKey]?: string;
} & {
  message?: string;
  imageUri?: string;
}