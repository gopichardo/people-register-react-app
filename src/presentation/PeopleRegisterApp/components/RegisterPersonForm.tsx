
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { RegisterForm } from '../types/register-form';
import { MessageModal } from './MessageModal';
import { useRegisterPeople } from '../hooks/useRegisterPeople';
import { useNavigate } from 'react-router-dom';


const defaultMessageModalSettings = {
    show: false,
    title: "",
    button: {
        text: "",
        style: ""
    }
};
export const RegisterPersonForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [messageModal, setMessageModal] = useState(defaultMessageModalSettings);

    const { setNewPerson, registeredPerson } = useRegisterPeople();

    const navigate = useNavigate();

    console.log("registeredPerson: ", registeredPerson);


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
        isFormValid,
        onResetForm
    } = useForm(initialForm, formValidations);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        setNewPerson({
            name: contactName as string,
            company: {
                name: companyName as string
            },
            email: email as string,
            phone: phone as string,
        });

        onResetForm();
        setFormSubmitted(false);

        setMessageModal({
            title: "Datos guardados correctamente",
            show: true,
            button: {
                text: "Aceptar",
                style: "primary"
            }
        })
    }

    const handleCloseMessageModal = () => {
        setMessageModal(defaultMessageModalSettings);
        navigate("/registros");
    }


    return (
        <>
            <MessageModal
                show={messageModal.show}
                handleClose={handleCloseMessageModal}
                title={messageModal.title}>
                <p>
                    La información se guardó correctamente en la Base de datos, para ver todos los registros haga click en el botón aceptar.
                </p>
            </MessageModal>

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
                <div className="d-grid gap-2 col-12 mx-auto">
                    <button
                        type="submit"
                        className={`btn btn-primary px-5 ${formSubmitted && !isFormValid ? 'disabled' : ''}`}
                    >Guardar</button>
                </div>
            </form>
        </>

    )
}
