import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <hr/>
            <div className={'ms-1 container'}>
                <div className={"row"}>
                    <div className={'col-md-4 col-sm-5'}>
                        <form className={"float-right"}>
                            <label htmlFor="email">Sign up for our newsletter:</label>
                            <input type="email" name="email" />
                            <button type="submit" className={"btn"}>Sign Up</button>
                        </form>
                    </div>
                    <div className={'col-md-6 col-sm-4 media-link'}>
                        <div className={"row mt-3"}>
                            <ul className={"col-md-4 col-sm-12"}>
                                <li><a href="/facebook">Facebook</a></li>
                            </ul>
                            <ul className={"col-md-4 col-sm-12"}>
                                <li><a href="/twitter">Twitter</a></li>
                            </ul>
                            <ul className={"col-md-4 col-sm-12"}>
                                <li><a href="/instagram">Instagram</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className={'col-md-2 col-sm-4'}>
                        <div>
                            <p>Copyright 2021</p>
                        </div>
                        <div>
                            <a href="/terms-of-use">Terms of Use</a>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                    </div>


                </div>

            </div>

        </footer>
    );
}

export default Footer;
