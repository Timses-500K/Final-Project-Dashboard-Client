// import '@/styles/globals.css'
import "../styles/index.css";
import Sidebar from "@/components/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />;
		</ChakraProvider>
	);
}
