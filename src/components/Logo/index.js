import { Center, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<Center>
			<HStack>
				<Image src="/logo.svg" width={50} height={50} alt="Nike Logo" />
				<Heading size={"lg"} fontWeight={"bold"} fontStyle={"italic"}>
					NIKE
				</Heading>
			</HStack>
		</Center>
	);
};

export default Logo;
