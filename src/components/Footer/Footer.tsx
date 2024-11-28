import React from 'react';
import Image from 'next/image';
import { Input } from '@/components';
import { MapPin, PhoneCall, Mail, Facebook, Twitter, Instagram, Youtube, MessageCircleQuestion, ChevronUp } from 'lucide-react';
import PayPal from '@/assets/images/icon/image.png';
import AmericanExpress from '@/assets/images/icon/image copy.png';
import Visa from '@/assets/images/icon/image copy 2.png';
import Master from '@/assets/images/icon/image copy 3.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-item'>
                        <h3 className='footer-item-title'>Company</h3>
                        <ul className='row-col'>
                            <li className='footer-item-link'>about us</li>
                            <li className='footer-item-link'>blog</li>
                            <li className='footer-item-link'>returns</li>
                            <li className='footer-item-link'>order status </li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <h3 className='footer-item-title'>Info</h3>
                        <ul className='row-col'>
                            <li className='footer-item-link'>How it works?</li>
                            <li className='footer-item-link'>blog</li>
                            <li className='footer-item-link'>our promises</li>
                            <li className='footer-item-link'>FAQ </li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <h3 className='footer-item-title'>Contact us</h3>
                        <ul className='row-col'>
                            <li className='footer-item-link flex'>
                                <MapPin color='rgb(203, 203, 203)' width={15} height={17} />
                                123 Main Street, Anytown,USA
                            </li>
                            <li className='footer-item-link flex'>
                                <PhoneCall color='rgb(203, 203, 203)' width={15} height={17} />
                                +1 (555) 123-4567
                            </li>
                            <li className='footer-item-link flex'>
                                <Mail color='rgb(203, 203, 203)' width={15} height={17} />
                                TechHeimSupport@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <h3 className='footer-item-title'>Sign up for News and updates</h3>
                        <div className='footer-item-input'>
                            <Input
                                type="text"
                                placeholder='E-mail Address'
                            />
                        </div>
                        <div className='footer-item-input'>
                            <div className='footer-favorite'>
                                <Facebook color='#fff' width={26} height={26} />
                                <Twitter color='#fff' width={26} height={26} />
                                <Instagram color='#fff' width={26} height={26} />
                                <Youtube color='#fff' width={26} height={26} />
                            </div>
                        </div>
                    </div>
                    <div className='footer-item'>
                        <div className='row-col'>
                            <button className='footer-item-button'>
                                <MessageCircleQuestion color='rgb(45, 45, 45)' />
                            </button>
                            <button className='footer-item-button'>
                                <ChevronUp color='rgb(45, 45, 45)' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer-carts'>
                    <Image src={PayPal} alt='PayPal' width={32} height={24} />
                    <Image src={AmericanExpress} alt='AmericanExpress' width={32} height={24} />
                    <Image src={Visa} alt='Visa' width={32} height={24} />
                    <Image src={Master} alt='Master' width={32} height={24} />
                </div>
                <div className='footer-down'> 
                    <div className='row'>
                        <div className="footer-left">
                            <p className='footer-left-text'>&copy; 2023 Tech Heim.</p>
                        </div>
                        <div className="row" style={{gap: 21}}>
                            <a href="#" className="footer-item-link">Cookie Settings</a>
                            <a href="#" className="footer-item-link">Privacy Policy</a>
                            <a href="#" className="footer-item-link">Terms and Conditions</a>
                            <a href="#" className="footer-item-link">Imprint</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;