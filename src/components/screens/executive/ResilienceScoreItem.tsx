import {
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Box,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Indicator from "components/common/indicator/Indicator";

const ResilienceScoreItem = ({ data }) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<ImageIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={data.title} secondary={data.description} />
			<Box>
				<Indicator score={data.score} />
			</Box>
		</ListItem>
	);
};

export default ResilienceScoreItem;
