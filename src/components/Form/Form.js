import React from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Form({ sort, formTitle, buttonText, linkWay, text, linkText, children, isLoading }) {

    // return (
    //     <div className="form" >
    //         <h2 className="form__title">{formTitle}</h2>
    //         <form className="form__form" method="post" action="#" noValidate>
    //             {children}
    //             <button type="submit" className={`form__button form__button_${sort}`} >
    //                 {isLoading ? <Preloader /> : buttonText}
    //             </button>
    //         </form>
    //         <div className={`form__down form__down_${sort}`}>
    //             <p className={`form__text form__text_${sort}`}>{text}  </p>
    //             <Link to={linkWay} className={`form__link form__link_${sort}`}>{linkText}</Link>
    //         </div>
    //     </div>
    // )

    return (
        <div className='form' >

            <form className="form__form" method="post" action="#" noValidate>
                <h2 className="form__title">{formTitle}</h2>
                {children}
            </form>
            <div className={`form__down form__down_${sort}`}>
                <button type="submit" className={`form__button form__button_${sort}`} >
                    {isLoading ? <Preloader /> : buttonText}
                </button>
                <p className={`form__text form__text_${sort}`}>{text}  <Link to={linkWay} className={`form__link form__link_${sort}`}>{linkText}</Link></p>

            </div>
        </div>
    )
}

export default Form;
