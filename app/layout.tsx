"use client";

import "./globals.css";
import ClientNavBar from "@/components/ClientNavBar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
