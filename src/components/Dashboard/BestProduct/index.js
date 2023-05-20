import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const BestProduct = () => {
	return (
		<Box>
			<Card
				direction={{ base: "column", sm: "row" }}
				w={"100%"}
				variant="elevated"
			>
				<Image width={250} height={50} src="/product.png" />
				<Stack>
					<CardBody>
						<Heading size="md" mb={8}>
							Sporty Orange Nike
						</Heading>
						<Text>Sales this month</Text>
						<Text pb={3}>1608 unit</Text>
						<Text>Amount</Text>
						<Text>Rp. 300.000.000</Text>
					</CardBody>
				</Stack>
			</Card>
		</Box>
	);
};

export default BestProduct;
