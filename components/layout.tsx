import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
	title?: string;
	description?: string;
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
	title = "",
	description = "",
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
};
