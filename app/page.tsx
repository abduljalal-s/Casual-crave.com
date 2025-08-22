"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
	const router = useRouter();
	const { status, data: session } = useSession();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const pages = [{ name: "Profiles", path: "/Profiles" }];

	const testimonials = [
		{
			name: "Alex M.",
			rating: 5,
			text: "Helped me find genuine connections safely.",
		},
		{ name: "Samantha R.", rating: 5, text: "Secure and discreet dates." },
		{ name: "James T.", rating: 4, text: "Quality matches with verification." },
		{ name: "Emily L.", rating: 5, text: "Great for casual or lasting bonds." },
	];

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/login"); // redirect if not logged in
		}
	}, [status, router]);

	if (status === "loading") {
		return (
			<div className='min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-indigo-900 via-black to-purple-900'>
				Loading...
			</div>
		);
	}

	if (!session?.user) return null; // Redirect handled in useEffect

	return (
		<main className='min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white relative overflow-hidden'>
			{/* Background Stars */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='stars'></div>
				<div className='twinkling'></div>
			</div>

			{/* HEADER */}
			<header className='w-full p-4 bg-gray-900/50 sticky top-0 z-50 shadow-md'>
				<div className='flex justify-between items-center max-w-6xl mx-auto px-4'>
					{/* Logo/User */}
					<div className='flex items-center space-x-4'>
						<div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center cursor-pointer text-white font-bold'>
							{session?.user?.name?.[0]?.toUpperCase() || "U"}
						</div>
						<span className='text-lg font-semibold text-white hidden sm:inline'>
							{session?.user?.name || "User"}
						</span>
					</div>

					{/* Desktop Menu */}
					<div className='hidden md:flex space-x-4'>
						{pages.map((page) => (
							<button
								key={page.name}
								className='py-2 px-4 rounded-lg font-medium text-white transition-colors duration-300 bg-transparent hover:bg-purple-600/50'
								onClick={() => router.push(page.path)}
							>
								{page.name}
							</button>
						))}
						<button
							className='py-2 px-4 rounded-lg font-medium text-white bg-transparent hover:bg-purple-600/50 transition-colors duration-300'
							onClick={() => signOut()}
						>
							Sign Out
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<button
							onClick={toggleMobileMenu}
							className='text-white hover:text-purple-400 transition-colors duration-200 focus:outline-none'
							aria-label={
								isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"
							}
						>
							{isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className='md:hidden bg-gray-900/80 mt-4 p-4 rounded-lg shadow-lg mx-4'>
						{pages.map((page) => (
							<button
								key={page.name}
								className='block w-full text-left py-3 text-white hover:text-purple-400 transition-colors duration-200 text-lg'
								onClick={() => {
									router.push(page.path);
									toggleMobileMenu();
								}}
							>
								{page.name}
							</button>
						))}
						<button
							className='block w-full text-left py-3 text-white hover:text-purple-400 transition-colors duration-200 text-lg'
							onClick={() => {
								signOut();
								toggleMobileMenu();
							}}
						>
							Sign Out
						</button>
					</div>
				)}
			</header>

			{/* Hero Section */}
			<section className='flex-grow flex items-center justify-center text-center z-10 py-12 px-4'>
				<div>
					<h1 className='text-3xl sm:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
						Welcome to Casual Crave
					</h1>
					<p className='text-lg sm:text-xl mb-8 text-gray-300'>
						Secure, thrilling meetups for mature adults.
					</p>
				</div>
			</section>

			{/* Achievements Section */}
			<section id='achievements' className='py-12 px-4 bg-gray-900/50'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
						Our Achievements
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='p-6 bg-gray-800/50 rounded-xl shadow-lg'>
							<h3 className='text-xl sm:text-2xl font-semibold mb-4 text-white'>
								Years of Service
							</h3>
							<span className='text-3xl sm:text-4xl font-bold text-purple-400'>
								5
							</span>
							<p className='text-gray-400 mt-2'>
								Building trusted connections since 2020
							</p>
						</div>
						<div className='p-6 bg-gray-800/50 rounded-xl shadow-lg'>
							<h3 className='text-xl sm:text-2xl font-semibold mb-4 text-white'>
								Satisfied Meets
							</h3>
							<span className='text-3xl sm:text-4xl font-bold text-purple-400'>
								50,000
							</span>
							<p className='text-gray-400 mt-2'>Facilitating safe encounters</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id='testimonials' className='py-12 px-4'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
						What Our Users Say
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className='bg-gray-900/80 p-6 rounded-xl shadow-lg border border-purple-500/30'
							>
								<div className='flex mb-2 justify-center'>
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className={`w-5 h-5 ${
												i < testimonial.rating
													? "text-yellow-400"
													: "text-gray-600"
											}`}
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z' />
										</svg>
									))}
								</div>
								<p className='text-gray-300 mb-4 text-sm sm:text-base'>
									{testimonial.text}
								</p>
								<p className='text-sm font-semibold text-purple-400'>
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-12 px-4 bg-gray-900/50'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
						About Casual Crave
					</h2>
					<p className='text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
						Casual Crave offers secure, thrilling meetups for mature adults with
						verified profiles and privacy focus.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='p-6 bg-gray-800/50 rounded-xl shadow-lg'>
							<h3 className='text-lg sm:text-xl font-semibold mb-2 text-white'>
								Our Mission
							</h3>
							<p className='text-gray-400 text-sm sm:text-base'>
								Empowering genuine, exciting connections with safety.
							</p>
						</div>
						<div className='p-6 bg-gray-800/50 rounded-xl shadow-lg'>
							<h3 className='text-lg sm:text-xl font-semibold mb-2 text-white'>
								Why Choose Us
							</h3>
							<p className='text-gray-400 text-sm sm:text-base'>
								Verified, discreet, and tailored for mature meetups.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
