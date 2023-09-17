import React, {
	useState,
	useEffect,
	useRef,
} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/logo.png";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollPos, setScrollPos] = useState(0);
	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);
	const [isDesktop, setIsDesktop] = useState(
		window.innerWidth > 1024
	);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 1024);
		};

		const handleScroll = () => {
			setScrollPos(window.pageYOffset);
		};

		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(
					event.target
				) &&
				!buttonRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener(
			"resize",
			handleResize
		);
		window.addEventListener(
			"scroll",
			handleScroll
		);
		document.addEventListener(
			"mousedown",
			handleClickOutside
		);

		return () => {
			window.removeEventListener(
				"resize",
				handleResize
			);
			window.removeEventListener(
				"scroll",
				handleScroll
			);
			document.removeEventListener(
				"mousedown",
				handleClickOutside
			);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	const renderMobileNavBar = () => (
		<>
			<div className="flex justify-between items-center w-full">
				<Link to="/">
					<img
						src={Logo}
						alt="Logo"
						className="h-16 w-auto"
					/>
				</Link>
				<button
					onClick={toggleMenu}
					className="focus:outline-none"
					ref={buttonRef}
				>
					{isOpen ? (
						<FaTimes className="w-6 h-6 text-white" />
					) : (
						<FaBars className="w-6 h-6 text-white" />
					)}
				</button>
			</div>
			<div
				ref={dropdownRef}
				className={`dropdown-content transition-transform transform ${
					isOpen
						? "flex flex-col space-y-4 absolute top-20 right-0 w-full p-5 z-10 shadow-lg mt-2"
						: "hidden"
				}`}
				style={{
					transform: isOpen
						? "translateY(0)"
						: "translateY(-10px)",
					backgroundColor:
						scrollPos === 0
							? "#2e3046"
							: "transparent",
				}}
			>
				{[
					"Strona główna",
					"O Nas",
					"Pakiety",
				].map((linkName) => (
					<Link
						key={linkName}
						to={`/${linkName
							.replace(/\s+/g, "-")
							.toLowerCase()}`}
						onClick={handleLinkClick}
						className="text-white px-4 py-2 text-lg font-medium block hover:bg-opacity-70 hover:bg-[#1e1f33] rounded transition-all duration-200"
					>
						{linkName}
					</Link>
				))}
				<hr className="my-4 border-t border-opacity-40" />
				<div className="flex justify-center items-center">
					<Link to="/">
						<img
							src={Logo}
							alt="Logo"
							className="h-12 w-auto"
						/>
					</Link>
				</div>
			</div>
		</>
	);

	const renderDesktopNavBar = () => (
		<div className="flex justify-between items-center w-full">
			{/* Logo and Name */}
			<div className="flex items-center space-x-4">
				<Link to="/">
					<img
						src={Logo}
						alt="Logo"
						className="h-20 w-auto"
					/>
				</Link>
				<h2 className="text-xl font-semibold text-white font-serif">
					Natural Therapies
				</h2>
			</div>

			{/* Links */}
			<div className="flex items-center space-x-8">
				{[
					"Strona główna",
					"O Nas",
					"Pakiety",
				].map((linkName) => (
					<Link
						key={linkName}
						to={`/${linkName
							.replace(/\s+/g, "-")
							.toLowerCase()}`}
						className="text-white px-5 py-2 text-lg font-medium block hover:bg-opacity-70 hover:bg-[#1e1f33] rounded-lg transition-all duration-200 font-serif" // Applying Montserrat font family for the links
					>
						{linkName}
					</Link>
				))}
			</div>
		</div>
	);

	return (
		<nav
			className={`fixed top-0 w-full shadow-md transition-all duration-300 z-50 ${
				scrollPos > 10
					? "bg-opacity-70"
					: "bg-opacity-100"
			} bg-secondary`} // Changing opacity based on scroll position
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center lg:justify-start">
				{isDesktop
					? renderDesktopNavBar()
					: renderMobileNavBar()}
			</div>
		</nav>
	);
};

export default NavBar;
