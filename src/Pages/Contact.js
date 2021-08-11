import React from 'react'
import ContactItem from '../Components/ContactItem'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Title from '../Components/Title';

function Contact() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact Page'} span={'Contact Page'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5331.679841349268!2d74.73623237517883!3d19.10471771865692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07c50cb1b45%3A0x2f014b69d2ee6d7d!2sTarakpur%2C%20Ahmednagar%2C%20Maharashtra%20414001!5e0!3m2!1sen!2sin!4v1628092017269!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" ></iframe>
                </div>
                <div className="contact-sect">
                    <div className="display">
                        <ContactPhoneIcon />
                        <ContactItem text1={'+91 9890556788'} title={'Phone'}></ContactItem>
                    </div>
                    <div className="display">
                        <EmailIcon />
                        <ContactItem text1={'apratiksha1137@gmail.com'} title={'Email'} />
                    </div>
                    <div className="display">
                        <LocationOnIcon />
                        <ContactItem text1={'Tarakpur, Ahmednagar Maharashtra 414001'} title={'Address'} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
