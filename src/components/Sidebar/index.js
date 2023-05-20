import {
	Box,
	Button,
	Center,
	Divider,
	HStack,
	Heading,
	Text,
} from "@chakra-ui/react";
import { BsFillBoxFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";

const Sidebar = () => {
	const url = useRouter();

	return (
		<Box position="fixed" left={0} p={5} w="15vw" top={0} h="100%" bg="#f1f3f4">
			<Box m="24px 0px">
				<Logo />
			</Box>
			<Divider m={"32px 0px"} mb={4} border="1px solid #B0B0B0" />
			<Link href={"/"}>
				<Button
					leftIcon={<MdDashboard />}
					fontSize={16}
					bg={url.pathname === "/" ? "#122854" : "#f1f3f4"}
					color={url.pathname === "/" ? "#fff" : "#545b63"}
					justifyContent={"left"}
					w="100%"
					h="48px"
					padding="12px 32px"
					variant="solid"
					borderRadius={32}
					m={"8px 0px"}
					sx={{
						"&:hover": {
							bg: url.pathname === "/" ? "#09142a" : "#dfdfdf",
						},
					}}
				>
					<Text ml={4}>Dashboard</Text>
				</Button>
			</Link>
			<Link href={"/product"}>
				<Button
					leftIcon={<BsFillBoxFill />}
					fontSize={16}
					bg={url.pathname === "/product" ? "#122854" : "#f1f3f4"}
					color={url.pathname === "/product" ? "#fff" : "#545b63"}
					justifyContent={"left"}
					w="100%"
					h="48px"
					padding="12px 32px"
					variant="solid"
					borderRadius={32}
					m={"8px 0px"}
					sx={{
						"&:hover": {
							bg: url.pathname === "/product" ? "#09142a" : "#dfdfdf",
						},
					}}
				>
					<Text ml={4}>Product</Text>
				</Button>
			</Link>
		</Box>
	);
};

export default Sidebar;
