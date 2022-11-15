import React from "react";
import { FooterStyled } from "./Footer.styled";
import LogoCompany from "assets/images/logo.webp";


const Footer: React.FC = () => {
	return (
		<FooterStyled>
			<p className='footer-title'>
				ONFIDENTIAL AND PROPRIETY
				<br />
				INFORMATION
			</p>
			<br />

			<span className='footer-desc'>
				Pentera provides the Pentera™ service and
				<br />
				report “As Is”, without any warranty of any
				<br />
				kind. Pentera makes no warranty that the
				<br />
				information contained in this report is
				<br />
				complete or error - free.
				<br />
				<br />
				Copyright 2022 Pentera Ltd
			</span>

			<div className='logo'>
				<img src={LogoCompany} alt='company' />
			</div>
		</FooterStyled>
	);
};

export default Footer;
