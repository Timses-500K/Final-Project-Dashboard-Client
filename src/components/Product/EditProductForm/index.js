import {
	Button,
	FormControl,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	NumberInput,
	NumberInputField,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EditProductForm = ({ data, isOpen, onClose, applyEdit }) => {
	const [product, setProduct] = useState(JSON.parse(JSON.stringify(data)));

	const onItemChange = (e, property) => {
		e.preventDefault();
		product[property] = e.target.value;
		setProduct({ ...product });
	};

	const onNumberChange = (value, property) => {
		product[property] = value;
		setProduct({ ...product });
	};

	const testclick = () => {
		console.log(product);
	};

	return (
		<Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					m={4}
					textAlign={"center"}
					fontWeight={"bold"}
					fontSize={"3xl"}
				>
					Add Product
				</ModalHeader>
				<ModalBody p={"0px 80px"}>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Product Name</Text>
							<Input
								value={product.itemName}
								placeholder="Product Name"
								size="md"
								onChange={(e) => onItemChange(e, "itemName")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Price</Text>
							<NumberInput
								value={product.price}
								size="md"
								width={"100%"}
								onChange={(e) => onNumberChange(e, "price")}
							>
								<NumberInputField placeholder="Price" />
							</NumberInput>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Stock</Text>
							<NumberInput
								value={product.stock}
								size="md"
								width={"100%"}
								onChange={(e) => onNumberChange(e, "stock")}
							>
								<NumberInputField placeholder="Stock" />
							</NumberInput>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Color</Text>
							<Input
								value={product.color}
								placeholder="Color"
								size="md"
								onChange={(e) => onItemChange(e, "color")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Image</Text>
							<Input
								value={product.imageUrl}
								placeholder="Image"
								size="md"
								onChange={(e) => onItemChange(e, "imageUrl")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Description</Text>
							<Textarea
								value={product.description}
								placeholder="Description"
								size={"md"}
								resize={"vertical"}
								onChange={(e) => onItemChange(e, "description")}
							/>
						</HStack>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={() => applyEdit(product)}>
						Apply Edit
					</Button>
					<Button variant="ghost" onClick={onClose}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EditProductForm;
