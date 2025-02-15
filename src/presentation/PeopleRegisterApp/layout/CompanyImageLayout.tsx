import image from '../../../assets/images/weeclaims.png';

type CompanyImageLayout = {
    children?: React.ReactNode,
    title?: string
}

export const CompanyImageLayout = ({ children, title }: CompanyImageLayout) => {
    return (
        <div className='container h-100 d-flex flex-column flex-xl-row'>
            <div className="bg-light rounded col-xl-6 d-flex flex-column justify-content-center">
                <img src={image} alt="WeeClaims logo" className='img-fluid p-3 mb-3' />
            </div>
            <div className='col col-xl-6 d-flex flex-column justify-content-center'>
                <h1 className='h3 text-primary'>{title ?? ''}</h1>
                {children}
            </div>
        </div>
    )
}
