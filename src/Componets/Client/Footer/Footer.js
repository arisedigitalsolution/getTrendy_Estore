import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedinIn, FaLocationPinLock } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { useAuth } from "../../AuthContext/AuthContext";

const Footer = () => {
  const { userToken } = useAuth();

  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-start ">
        <section
          className=""
          style={{ backgroundColor: "white", color: "black" }}
        >
          <MDBContainer className="text-center text-md-start  py-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <img
                  src="/Images/Get_Trendy_Logo.png"
                  alt="logo"
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-black">
                  GET Trendy brings you premium-quality T-shirts designed to
                  match your unique style. We believe in combining comfort,
                  creativity, and customer care to deliver the best for you!
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">My Account</h6>
                <p>
                  <a href="/aboutUs" className="text-black">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/myOrders" className="text-black">
                    Track Orders
                  </a>
                </p>
                {/* <p>
                  <a href="#!" className="text-white">
                    Shipping
                  </a>
                </p> */}
                {userToken ? (
                  <p>
                    <a href="/profilePage" className="text-black">
                      My Account
                    </a>
                  </p>
                ) : (
                  <p>
                    <a href="/login" className="text-black">
                      My Account
                    </a>
                  </p>
                )}

                {/* <p>
                  <a href="/storeRegister" className="text-white">
                    My Store
                  </a>
                </p> */}
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

                <p>
                  <a href="/privacyPolicy" className="text-black">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="/termsconditions" className="text-black">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="/cancellation-Reschedule" className="text-black">
                    Cancellation & Reschedule Policy
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-black">
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-black">
                  <FaEnvelope /> &nbsp; gettrendy.in@gmail.com
                </p>
                <p className="text-black">
                  <BsFillTelephoneInboundFill /> &nbsp;  +91 85510 00442 / 86260 10443 
                </p>
                <p className="text-black">
                  <FaLocationPinLock /> &nbsp; Flat No. 403, 4th Floor, B-wing,
                  Saraswati Crystal, Opp. Silver Brich Hospital, Raikar Mala,
                  Dhayari, Pune-411041
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section
          className="d-flex justify-content-center  p-4 border-bottom"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div>
            <a href="https://www.facebook.com/share/1AVHHdahw2/?mibextid=wwXIfr" className="me-4 text-reset">
              <FaFacebook size={25} />
            </a>
           
            
            <a href="https://www.instagram.com/gettrendybrand?igsh=MnF5bDA1emdzcjhh&utm_source=qr" className="me-4 text-reset">
              <FaInstagram fab icon="instagram" size={25} />
            </a>
            <a href="https://www.linkedin.com/company/get-trendy-pune/about/?viewAsMember=true" className="me-4 text-reset">
              <FaLinkedinIn fab icon="linkedin" size={25} />
            </a>
            <a href="https://g.co/kgs/u5jnWfa" className="me-4 text-reset">
              <FaGoogle size={25} />
            </a>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "white", color: "black" }}
        >
          © {new Date().getFullYear()} All Rights Reserved &nbsp; | &nbsp;
          <a className="text-reset fw-bold " href="">
            Get Trendy
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
