"use client";

import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white flex flex-col'>
			{/* Header */}
			<header className='w-full p-4 bg-gray-900/60 sticky top-0 z-50 shadow-md'>
				<div className='max-w-6xl mx-auto flex justify-between items-center'>
					<h1 className='text-xl sm:text-2xl font-bold text-white'>
						CasualCrave Profiles
					</h1>
					<nav className='space-x-4 hidden sm:flex'>
						<a href='/' className='hover:text-purple-400 transition'>
							Home
						</a>
					</nav>
				</div>
			</header>

			{/* Page Intro */}
			<section className='text-center mt-12 px-4 sm:px-0 max-w-2xl mx-auto'>
				<h2 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
					Exclusive Profile
				</h2>
				<p className='text-gray-300 text-sm sm:text-base mt-4'>
					You are viewing this profile because it was shared with you directly.
					For a professional, clean, and reliable engagement, please reach out
					to management below.
				</p>
			</section>

			{/* Profile Card */}
			<section className='flex justify-center mt-12 px-4 sm:px-0'>
				<ProfileCard />
			</section>

			{/* Footer / Call-to-Action */}
			<footer className='mt-12 mb-12 text-center px-4 sm:px-0'>
				<p className='text-gray-400 text-sm'>
					Thank you for visiting. For inquiries or bookings, contact us directly
					through Telegram or WhatsApp.
				</p>
			</footer>
		</main>
	);
}
