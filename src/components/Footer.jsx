import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
					Come along with us, on our journey to make stronger children who will become our future problems solvers. There are several ways you can support in our mission. 
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/in/eniola-ademola-7386161a7/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Eniola Ademola </small>
			</div>
		</footer>
	);
};

export default Footer;
