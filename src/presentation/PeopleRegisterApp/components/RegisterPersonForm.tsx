
import { useState } from 'react';
import image from '../../../assets/images/weeclaims.png';
import { useForm } from '../hooks/useForm';
import { RegisterForm } from '../types/register-form';
import { PeopleList } from './PeopleList';

export const RegisterPersonForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const initialForm: RegisterForm = {
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formValidations: any =
    {
        companyName: [(value: string) => {
            return value.trim().length > 0 && /^[a-zA-Z\s]*$/.test(value);
        }, "El nombre de la compañía es requerido"],
        contactName: [(value: string) => {
            return value.trim().length > 0 && /^[a-zA-Z\s]*$/.test(value);
        }, "El nombre del contacto es requerido"],
        email: [(value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }, "Ingrese un email valido"],
        phone: [(value: string) => {
            const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
            return phoneRegex.test(value);
        }, "Ingrese un teléfono válido"]
    };

    const {
        companyName,
        companyNameValid,
        contactName,
        contactNameValid,
        email,
        emailValid,
        phone,
        phoneValid,
        onInputChange,
        isFormValid
    } = useForm(initialForm, formValidations);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
    }

    return (
        <>
            <div className='d-flex flex-column flex-xl-row flex-lg-row justify-content-center align-items-center align-items-xl-stretch align-items-lg-stretch mt-3'>
                <div className="col-12 col-xl-6 col-lg-4 col-md-6 col-sm-8 d-flex flex-column justify-content-center bg-light rounded me-xl-3">
                    <img src={image} alt="WeeClaims logo" className='img-fluid p-3 mb-3' />
                </div>
                <div className="col-12 col-xl-6 col-lg-4 col-md-6 col-sm-8">
                    <h1 className='h3 text-primary'>Registro persona</h1>
                    <form className="form" onSubmit={handleFormSubmit} noValidate>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="companyName"
                                className={`form-control ${formSubmitted && companyNameValid ? 'is-invalid' : ''}`}
                                placeholder="Nombre de la compañía"
                                value={companyName}
                                onChange={onInputChange}
                            />
                            <div className='invalid-feedback'>{companyNameValid}</div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="contactName"
                                className={`form-control ${formSubmitted && contactNameValid ? 'is-invalid' : ""}`}
                                placeholder="Nombre de la persona de contacto"
                                value={contactName}
                                onChange={onInputChange} />
                            <div className='invalid-feedback'>{contactNameValid}</div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${formSubmitted && emailValid ? 'is-invalid' : ""}`}
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={onInputChange} />
                            <div className='invalid-feedback'>{emailValid}</div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="tel"
                                name="phone"
                                className={`form-control ${formSubmitted && phoneValid ? 'is-invalid' : ""}`}
                                placeholder="Teléfono"
                                value={phone}
                                onChange={onInputChange} />
                            <div className='invalid-feedback'>{phoneValid}</div>
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className={`btn btn-primary px-5 ${formSubmitted && !isFormValid ? 'disabled' : ''}`}
                            >Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
            <PeopleList />
        </>
    )
}
