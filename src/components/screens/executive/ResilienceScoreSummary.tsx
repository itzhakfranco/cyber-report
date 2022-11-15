import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Box,
	Divider,
} from "@mui/material";
import * as Layout from "components/layout/Layout.styled";
import ImageIcon from "@mui/icons-material/Image";
import Indicator from "components/common/indicator/Indicator";

const ResilienceScoreSummary = () => {
	return (
		<Layout.Row>
			<List>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='0 Total Action Approvals' />
					<Box>
						<Indicator score={50} />
					</Box>
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='13 Total Actions' />
					<Box>
						<Indicator score={13} />
					</Box>
				</ListItem>
				<Divider variant='middle' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='4 Successful (31%)' />
					<Box>
						<Indicator score={31} />
					</Box>
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='9 No-results (69%)' />
					<Box>
						<Indicator score={31} />
					</Box>
				</ListItem>
			</List>
		</Layout.Row>
	);
};

export default ResilienceScoreSummary;
