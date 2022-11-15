import { ScreenTemplateStyle } from "./ScreenTemplate.styled";

const ScreenTemplate = ({ children }) => {
	return <ScreenTemplateStyle>{children}</ScreenTemplateStyle>;
};

export default ScreenTemplate;
