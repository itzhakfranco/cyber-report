import React, { useEffect, useRef } from "react";
// import ReactToPrint from 'react-to-print'

{
	/* <PrintBtn
    elementRef={codeqrRef}
    elementTrigger={<Button variant="contained" color="primary">להדפסה</Button>}
/> */
}

interface IProps {
	elementRef?: any;
	elementTrigger?: any;
}

const PrintBtn: React.FC<IProps> = ({ elementRef, elementTrigger }) => {
	return null;
	// return (
	// 	<ReactToPrint
	// 		trigger={() => elementTrigger}
	// 		content={() => elementRef.current}
	// 	/>
	// );
};

export default PrintBtn;
