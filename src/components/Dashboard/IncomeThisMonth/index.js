import { Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const IncomeThisMonthCard = () => {
	const [income, setIncome] = useState(true);

	return (
		<Card
			p={2}
			h={"100%"}
			bg={"#e7eefe"}
			variant={"elevated"}
			border={"1px solid #cedcfd"}
		>
			<CardBody>
				<Stack spacing="3">
					<Heading mt={2} size="lg">
						Income This Month
					</Heading>
					<Text fontSize="lg">Total income per *this month* is</Text>
					<Flex alignItems={"center"}>
						<Text fontWeight={"bold"} fontSize="5xl">
							$450
						</Text>
						<Text
							color={income ? "#7aff33" : "#e11414"}
							fontWeight={"bold"}
							fontSize="3xl"
						>
							+30.07%
						</Text>
					</Flex>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default IncomeThisMonthCard;
