import * as Yup from 'yup';

export const signUpSchema=Yup.object().shape({
    fullName: Yup.string().max(15,"Name is too long").required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().min(6,"Password is too short").max(12).matches(/\d+/,"Password is includes number").matches(/[a-z]+/,"Password is includes small letter").matches(/[A-Z]+/,"Password is includes large letter").matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir').required("Password is required")
  })