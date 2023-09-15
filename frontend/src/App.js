import "./App.css";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import ParallaxSlider from "./components/ParallaxSlider";
import Testimonials from "./components/Testimonials";
function App() {
	return (
		<>
			<Layout>
				<HeroSection />
				<ParallaxSlider />
				<Testimonials />
			</Layout>
		</>
	);
}

export default App;
