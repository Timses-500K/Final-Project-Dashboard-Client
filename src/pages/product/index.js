import AddProductForm from "@/components/Product/AddProductForm";
import EditProductForm from "@/components/Product/EditProductForm";
import ProductTable from "@/components/Product/ProductTable";
import Sidebar from "@/components/Sidebar";
import { createNewItem, getAllItem } from "@/modules/fetch";
import { Box, Button, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () => {
	const [products, setProducts] = useState();
	const [isAdd, setIsAdd] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editData, setEditData] = useState();
	// ========== Fetch Starter Data Section ==========
	const fetchingData = async () => {
		const data = await getAllItem();
		setProducts(JSON.parse(JSON.stringify(data)));
	};

	useEffect(() => {
		fetchingData();
	}, []);

	// ========== Add Product Section ==========
	const onAddOpenHandle = () => {
		setIsAdd(true);
	};

	const onAddCloseHandle = () => {
		setIsAdd(false);
	};

	const onAddSubmit = async (e, value) => {
		e.preventDefault();
		const container = JSON.parse(JSON.stringify(products));
		container.unshift(value);
		setProducts([...container]);
		// return await createNewItem(value);
	};

	// ========== Edit Product Section ==========
	const onEditOpenHandle = (data) => {
		setEditData(data);
		setIsEdit(true);
	};

	const onEditCloseHandle = () => {
		setIsEdit(false);
	};

	const onEditConfirm = (data) => {
		const container = [];
		products.forEach((res) => {
			if (res.id === data.id) {
				container.push({ ...data });
			} else {
				container.push(res);
			}
		});
		setProducts([...container]);
		onEditCloseHandle();
	};

	const onDeleteProducthandle = (data) => {
		const container = [];
		products.forEach((res) => {
			if (res.id === data.id) {
				container.push({ ...data, visibility: "False" });
			} else {
				container.push(res);
			}
		});
		setProducts([...container]);
	};

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>
			<Sidebar />
			<Box
				ml={"15vw"}
				width={"85vw"}
				height={"100vh"}
				maxHeight={"100vh"}
				p={8}
			>
				<Heading pb={8}>All Product</Heading>
				{products && (
					<ProductTable
						openEdit={onEditOpenHandle}
						products={products}
						onClose={onEditCloseHandle}
						deleteProduct={onDeleteProducthandle}
					/>
				)}
				<Box mt={4} textAlign={"right"}>
					<Button colorScheme={"whatsapp"} onClick={onAddOpenHandle}>
						Add Product
					</Button>
				</Box>
				{isAdd && (
					<Box w={"70vw"}>
						<AddProductForm
							isOpen={isAdd}
							onClose={onAddCloseHandle}
							onSubmit={onAddSubmit}
						/>
					</Box>
				)}

				{isEdit && editData && (
					<EditProductForm
						data={editData}
						applyEdit={onEditConfirm}
						isOpen={isEdit}
						onClose={onEditCloseHandle}
					/>
				)}
			</Box>
		</>
	);
};

export default Product;
