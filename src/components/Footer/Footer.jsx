import React from 'react';
import facebookIcon from "../../assets/facebook.png";
import linkdinIcon from "../../assets/linkdin.png";
import xIcon from "../../assets/x.png";
import mailIcon from "../../assets/mail.png";

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer sm:footer-horizontal   p-10 text-white mx-auto max-w-screen-2xl px-3 lg:px-6">
                <aside>
                    <h2 className="lg:text-2xl text-lg font-bold">CS — Ticket System</h2>
                    <p className='text-sm text-stone-400'>
                        We are dedicated to providing seamless support <br /> solutions that  bridge the gap between businesses <br />  and their customers. Our platform ensures every <br /> query is tracked, managed, and resolved with the <br />  highest level of efficiency and care
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title opacity-100 font-semibold text-white">Company</h6>
                    <a className="link link-hover text-stone-400">About Us</a>
                    <a className="link link-hover text-stone-400">Our Mission</a>
                    <a className="link link-hover text-stone-400">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 font-semibold text-white">Services</h6>
                    <a className="link link-hover text-stone-400">Products & Services</a>
                    <a className="link link-hover text-stone-400">Customer Stories</a>
                    <a className="link link-hover text-stone-400">Download Apps</a>

                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 font-semibold text-white">Information</h6>
                    <a className="link link-hover text-stone-400">Privacy Policy</a>
                    <a className="link link-hover text-stone-400">Terms & Conditions</a>
                    <a className="link link-hover text-stone-400">Join Us</a>
                </nav>
                <nav>

                    <h6 className="footer-title opacity-100 font-semibold text-white">Social Links</h6>
                    <a target='_blank' href='https://x.com/' className="flex mb-1.5 gap-2 link link-hover text-stone-400"> <img src={xIcon} alt="" /> @CS — Ticket System</a>
                    <a target='_blank' href='https://www.linkedin.com/' className="flex mb-1.5 gap-2 link link-hover text-stone-400"> <img src={linkdinIcon} alt="" /> @CS — Ticket System</a>
                    <a target='_blank' href='https://www.facebook.com/' className="flex mb-1.5 gap-2 link link-hover text-stone-400"> <img src={facebookIcon} alt="" /> @CS — Ticket System</a>
                    <a target='_blank' href='https://mail.google.com/mail/u/0/' className="flex gap-2 link link-hover text-stone-400"> <img src={mailIcon} alt="" /> support@cst.com</a>

                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-base  p-4 text-white border-t-2 border-gray-500 ">
                <aside>
                    <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;