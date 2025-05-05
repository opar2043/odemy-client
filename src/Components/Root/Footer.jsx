import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-950 text-white pb-4 md:pb-10'>
        <footer className="footer w-full md:w-10/12 mx-auto border-b  grid grid-cols-1 md:grid-cols-3 p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      <div className="join">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
<footer className="footer footer-center p-6">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Odemy</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer