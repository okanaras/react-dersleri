import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Gecerli email adresi giriniz.").required("Email alani zorunludur"),
    age: yup.number().positive("Pozitif bir deger giriniz.").integer("Tam Sayi giriniz").required("Yas alani zorunludur"),
    password: yup.string().required("Sifre alani zorunludur"),
    confirmPassword: yup.string().required("Sifre tekrari zorunludur").oneOf([yup.ref('password', yup.password)], 'Sifre tekrari ayni olmalidir.'),
    term: yup.boolean().required("Sozlesme alani zorunludur"),
});