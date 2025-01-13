import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();
   
    return (
        <div className="bg-black pb-5">
           <footer className="footer bg-black text-white p-10">
  <div>
   <h3 className="text-xl font-bold">CONTACT US</h3>
   <p>123 ABS Street, Uni 21, Bangladesh</p>
   <p>+88 123456789</p>
   <p>Mon - Fri: 08:00 - 22:00</p>
   <p>Sat - Sun: 10:00 - 23:00</p>
  </div>
  <nav>
    <h6 className="text-xl font-bold">Follow US</h6>
    <p>Join us on social media</p>
    <div className="grid grid-flow-col gap-4">
      <Link>
      <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt=""/>
      </Link>
      <Link>
      <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt=""/>
      </Link>
      <Link>
      <img src="https://img.icons8.com/?size=48&id=13963&format=png" alt=""/>
      </Link>
    </div>
  </nav>
 
</footer>
{
<p className="text-center text-sm text-white">Copyright © {currentYear}. All rights reserved.</p>
}
        </div>
    );
};

export default Footer;