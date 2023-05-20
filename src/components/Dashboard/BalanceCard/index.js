import { Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const BalanceCard = () => {
	const [income, setIncome] = useState(true);

	return (
		<Card
			p={2}
			h={"100%"}
			bg={"#1c1b20"}
			variant={"elevated"}
			border={"1px solid #cedcfd"}
			color={"#f5f5f8"}
			textAlign={"center"}
		>
			<CardBody>
				<Heading size="lg" mt={2}>
					Total Balance
				</Heading>
				<Text mt={10} fontWeight={"bold"} fontSize="6xl">
					$450
				</Text>
			</CardBody>
		</Card>
	);
};

export default BalanceCard;
