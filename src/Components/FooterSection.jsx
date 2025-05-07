import React from 'react'


const FooterSection = () => {

    const footerStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px 80px',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '30px',
    };

    const sectionStyle = {
        flex: '1 1 250px',
        marginRight: '20px',
        marginBottom: '20px',
    };

    const headingStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '15px',
        letterSpacing: '0.5px',
    };

    const paragraphStyle = {
        fontSize: '14px',
        lineHeight: '1.6',
        marginBottom: '10px',
        color: '#ccc',
    };

    const newsletterStyle = {
        display: 'flex',
    };

    const inputStyle = {
        flexGrow: '1',
        padding: '10px',
        border: 'none',
        borderRadius: '5px 0 0 5px',
        color: '#333',
    };

    const subscribeButtonStyle = {
        backgroundColor: '#555',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        fontSize: '14px',
    };

    const currencyStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#ccc',
        marginBottom: '5px',
    };

    const smallTextStyle = {
        fontSize: '12px',
        color: '#777',
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
    };

    const listItemStyle = {
        marginBottom: '8px',
        fontSize: '14px',
        color: '#ccc',
        cursor: 'pointer',
    };

    const socialIconsStyle = {
        display: 'flex',
    };

    const socialIconStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        fontSize: '16px',
    };

    const paymentIconsStyle = {
        display: 'flex',
        gap: '5px',
        marginTop: '10px',
    };

    const paymentIconStyle = {
        padding: '5px 8px',
        border: '1px solid #444',
        borderRadius: '3px',
        fontSize: '12px',
        color: '#ccc',
    };

    const copyrightStyle = {
        textAlign: 'center',
        fontSize: '12px',
        color: '#777',
        padding: '15px 20px',
        backgroundColor: '#111',
    };
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <h5 style={headingStyle}>BE THE FIRST TO KNOW</h5>
                    <p style={paragraphStyle}>Sign up for updates from mettā muse.</p>
                    <div style={newsletterStyle}>
                        <input type="email" placeholder="Enter your e-mail..." style={inputStyle} />
                        <button style={subscribeButtonStyle}>SUBSCRIBE</button>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h5 style={headingStyle}>CONTACT US</h5>
                    <p style={paragraphStyle}>+44 123 133 5390</p>
                    <p style={paragraphStyle}>customercare@mettamuse.com</p>
                </div>

                <div style={sectionStyle}>
                    <h5 style={headingStyle}>CURRENCY</h5>
                    <div style={currencyStyle}>
                        <span style={{ marginRight: '5px' }}>🇺🇸</span>
                        <span>USD</span>
                    </div>
                    <p style={smallTextStyle}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>

            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <h5 style={headingStyle}>mettā muse</h5>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>About Us</li>
                        <li style={listItemStyle}>Stories</li>
                        <li style={listItemStyle}>Artisans</li>
                        <li style={listItemStyle}>Boutiques</li>
                        <li style={listItemStyle}>Contact Us</li>
                        <li style={listItemStyle}>EU Compliances Docs</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h5 style={headingStyle}>QUICK LINKS</h5>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>Orders & Shipping</li>
                        <li style={listItemStyle}>Join/Login as a Seller</li>
                        <li style={listItemStyle}>Payment & Pricing</li>
                        <li style={listItemStyle}>Return & Refunds</li>
                        <li style={listItemStyle}>FAQs</li>
                        <li style={listItemStyle}>Privacy Policy</li>
                        <li style={listItemStyle}>Terms & Conditions</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h5 style={headingStyle}>FOLLOW US</h5>
                    <div style={socialIconsStyle}>
                        <span style={socialIconStyle}>O</span>
                        <span style={socialIconStyle}>in</span>
                    </div>
                    <h5 style={{ ...headingStyle, marginTop: '20px' }}>mettā muse ACCEPTS</h5>
                    <div style={paymentIconsStyle}>
                        <span style={paymentIconStyle}>G Pay</span>
                        <span style={paymentIconStyle}> Pay</span>
                        <span style={paymentIconStyle}>AMEX</span>
                        <span style={paymentIconStyle}>Visa</span>
                        <span style={paymentIconStyle}>Mastercard</span>
                        <span style={paymentIconStyle}>Paypal</span>
                    </div>
                </div>
            </div>

            <div style={copyrightStyle}>
                Copyright © 2023 mettamuse. All rights reserved.
            </div>
        </footer>
    )
}
export default FooterSection;