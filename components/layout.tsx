import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Header } from "./header";

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
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main>
				<Header />
				{children}
			</main>
		</>
	);
};
