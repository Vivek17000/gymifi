import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
	return (
		<>
			<Header title="Gt In Touch" image={HeaderImage}>
				Eu proident sit culpa laborum ad. Eu proident sit culpa laborum ad.
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:vivek17000@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
