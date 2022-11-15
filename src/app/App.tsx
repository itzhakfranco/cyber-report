import React from "react";
import Footer from "components/static/footer/Footer";
import AppBar from "components/static/app-bar/AppBar";
import MainSection from "components/static/main-section/MainSection";

const App: React.FC = () => {
	return (
		<>
			<AppBar />
			<MainSection />
			<Footer />
		</>
	);
};

export default App;
