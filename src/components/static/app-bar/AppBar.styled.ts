import styled from "styled-components";
import * as mui from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

export const LogoSlug = styled(mui.Typography).attrs((props) => ({
	sx: {
		mr: 2,
		display: { xs: "none", md: "flex" },
		fontFamily: "monospace",
		fontWeight: 700,
		letterSpacing: ".3rem",
		color: "inherit",
		textDecoration: "none",
	},

	variant: props.variant,
	noWrap: true,
	component: "a",
	href: "/",
}))``;

export const Hamburger = styled(mui.Box).attrs({
	sx: { flexGrow: 1, display: { xs: "flex", md: "none" } },
})``;
export const Logo = styled(AdbIcon).attrs({
	sx: { display: { xs: "none", md: "flex" }, mr: 1 },
})``;
export const LinkButton = styled(mui.Button).attrs({
	sx: { my: 2, color: "white", display: "block" },
})``;
export const LinksBoxWrapper = styled(mui.Box).attrs({
	sx: { flexGrow: 1, display: { xs: "none", md: "flex" } },
})``;

export const IconButton = styled(mui.IconButton).attrs({
	size: "large",
	"aria-label": "account of current user",
	"aria-controls": "menu-appbar",
	"aria-haspopup": "true",
	color: "inherit",
})``;

export const LinkItem = styled(Link).attrs({
	sx: { "text-decoration": "none" },
})``;
export const AppBarWrapper = styled(mui.AppBar).attrs({
	position: "static",
})``;
