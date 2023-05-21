import {
	Box,
	Button,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";

const ProductTable = ({ products, openEdit, deleteProduct }) => {
	return (
		<Box overflowY="auto" maxHeight="85%">
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Product Name</Th>
							<Th>Price</Th>
							<Th>Stock</Th>
							<Th textAlign={"center"}>Visibility</Th>
							<Th textAlign={"center"}>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{products &&
							products.map((res) => (
								<Tr>
									<Td>{res.itemName}</Td>
									<Td>{res.price}</Td>
									<Td>{res.stock}</Td>
									<Td textAlign={"center"}>{res.visibility}</Td>
									<Td textAlign={"center"}>
										<Button
											mr={3}
											colorScheme="yellow"
											onClick={() => openEdit(res)}
										>
											Edit
										</Button>
										<Button
											colorScheme="red"
											onClick={() => deleteProduct(res)}
										>
											Delete
										</Button>
									</Td>
								</Tr>
							))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default ProductTable;
