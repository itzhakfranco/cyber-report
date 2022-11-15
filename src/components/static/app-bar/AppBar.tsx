import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { ReportName } from "ts/enums/Report.enum";
import { Link } from "react-router-dom";
import { ReportText } from "ts/enums/Report.enum";
import * as styled from "./AppBar.styled";

const pages = [
	ReportName.EXECUTIVE,
	ReportName.IPRange,
	ReportName.MITRE_MATRIX,
	ReportName.TESTING_SCENARIO,
];

export default function AppBar() {
	return (
		<styled.AppBarWrapper>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<styled.Logo />
					<styled.LogoSlug>{ReportText.APPBAR_TITLE}</styled.LogoSlug>
					<styled.LinksBoxWrapper>
						{pages.map((page) => (
							<Link to={`/${page}`} className='nav-link' key={page}>
								<MenuItem>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							</Link>
						))}
					</styled.LinksBoxWrapper>
				</Toolbar>
			</Container>
		</styled.AppBarWrapper>
	);
}
