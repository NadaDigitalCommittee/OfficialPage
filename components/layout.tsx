import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Header } from "./header";

interface LayoutProps {
	title?: string;
	description?: string;
	timestamp?: number;
	children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#00213B" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={props.title} />
				<meta property="og:description" content={props.description} />
				<meta property="og:image" content="/logo.webp" />
				<meta
					property="og:site_name"
					content="灘校デジタル委員会ホームページ"
				/>
				<meta property="og:locale" content="ja_JP" />
				<meta
					property="article:published_time"
					content={`${new Date(props.timestamp ?? Date.now()).toISOString()}}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
    (function(d) {
      var config = {
        kitId: 'jsf0yzj',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  `,
					}}
				/>
			</Head>
			<main>
				<Header />
				{props.children}
			</main>
		</>
	);
};
