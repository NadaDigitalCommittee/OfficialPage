import type { FC, ReactNode } from "react";
import { Layout } from "./layout";

export interface NewsProps {
	title?: string;
	description?: string;
	timestamp: number;
	children?: ReactNode;
}

export const News: FC<NewsProps> = (props) => {
	return (
		<>
			<Layout {...props}>{props.children}</Layout>
		</>
	);
};
