/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 min-h-screen'>
      <div className='bg-gray-800 px-8 py-10 md:flex md:flex-wrap md:justify-between'>
        <div className='mb-6 md:w-1/5'>
          <h3 className='text-white font-bold mb-4'>About</h3>
          <ul>
            <li><a href='#' className='hover:text-sky-100'>Contact Us</a></li>
            <li><a href='#' className='hover:text-sky-200'>About Us</a></li>
            <li><a href='#' className='hover:text-sky-300'>Careers</a></li>
            <li><a href='#' className='hover:text-sky-400'>S9r Stories</a></li>
            <li><a href='#' className='hover:text-sky-500'>Press</a></li>
            <li><a href='#' className='hover:text-sky-600'>Corporate Information</a></li>
          </ul>
        </div>
        <div className='mb-6 md:w-1/5'>
          <h3 className='text-white font-bold mb-4'>Group Companies</h3>
          <ul>
            <li><a href='#' className='hover:text-yellow-900'>Deeporion</a></li>
            <li><a href='#' className='hover:text-yellow-800'>Celebal Tech</a></li>
            <li><a href='#' className='hover:text-yellow-600'>Sag Infotech</a></li>
          </ul>
        </div>
        <div className='mb-6 md:w-1/5'>
          <h3 className='text-white font-bold mb-4'>Help</h3>
          <ul>
            <li><a href='#' className='hover:text-yellow-800'>Payments</a></li>
            <li><a href='#' className='hover:text-yellow-700'>Shipping</a></li>
            <li><a href='#' className='hover:text-yellow-600'>Cancellation & Returns</a></li>
            <li><a href='#' className='hover:text-yellow-500'>FAQ</a></li>
          </ul>
        </div>
        <div className='mb-6 md:w-1/5'>
          <h3 className='text-white font-bold mb-4'>Consumer Policy</h3>
          <ul>
            <li><a className='hover:text-yellow-100'></a></li>
            <li><a className='hover:text-yellow-200'>Terms Of Use</a></li>
            <li><a className='hover:text-yellow-300'>Security</a></li>
            <li><a className='hover:text-yellow-400'>Privacy</a></li>
            <li><a className='hover:text-yellow-500'>Backend</a></li>
            <li><a className='hover:text-yellow-600'>UX/UI Designers</a></li>
            <li><a className='hover:text-yellow-700'>JS Developers</a></li>
          </ul>
        </div>
        <div className='mb-6 md:w-2/5'>
          <h3 className='text-white font-bold mb-4'>Mail Us</h3>
          <p className='text-sm'>S9r Technologies Private Limited,<br />sujalsukoimk5@gmail.com<br />Jaipur, 302031, Rajasthan, India</p>
          <h3 className='text-white font-bold mt-6 mb-4'>Registered Office Address</h3>
          <p className='text-sm'>S9r Technologies Private Limited,<br />177/178 Ram Nagar , Near Oberai Rajvilas , <br />Goner Road <br />Jaipur, 302031, Rajasthan, India</p>
          <p className='text-sm'>CIN: U51109KA2012PTC066107</p>
          <p className='text-sm'>Telephone: 9672632315</p>
        </div>
      </div>

      <div className='bg-gray-800 text-center py-4 border-t border-gray-700'>
        <p className='text-sm'>&copy; 2025-2050 S9rtechnologies.com</p>
        <div className='flex justify-center gap-4 mt-2'>
          <a  className='text-gray-300 hover:text-pink-500'>&#9675; Instagram</a>
          <a  className='text-gray-300 hover:text-blue-500'>&#9675; Twitter</a>
          <a  className='text-gray-300 hover:text-red-800'>&#9675; YouTube</a>
        </div>
        <div className='flex justify-center gap-4 mt-4'>
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' alt='' className='h-8' />
        </div>
      </div>
    </div>
  );
};
