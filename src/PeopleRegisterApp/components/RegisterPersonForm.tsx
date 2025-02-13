
import image from '../../assets/images/weeclaims.png';

export const RegisterPersonForm = () => {

    return (
        <div className='d-flex flex-column flex-xl-row flex-lg-row justify-content-center align-items-center align-items-xl-stretch align-items-lg-stretch mt-3'>
            <div className="col-12 col-xl-6 col-lg-4 col-md-6 col-sm-8 d-flex flex-column justify-content-center bg-light rounded me-xl-3">
                <img src={image} alt="WeeClaims logo" className='img-fluid p-3 mb-3' />
            </div>
            <div className="col-12 col-xl-6 col-lg-4 col-md-6 col-sm-8">
                <h1 className='h3 text-primary'>Registro persona</h1>
                <form className="form">
                    <div className="mb-4">
                        <input type="text" name="companyName" className="form-control" placeholder="Nombre de la compañía" />
                    </div>
                    <div className="mb-4">
                        <input type="text" name="contactName" className="form-control" placeholder="Nombre de la persona de contacto" />
                    </div>
                    <div className="mb-4">
                        <input type="email" name="email" className="form-control" placeholder="Correo electrónico" />
                    </div>
                    <div className="mb-4">
                        <input type="email" name="phone" className="form-control" placeholder="Teléfono" />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary px-5">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
