import { instance } from "../axios";

export const getAllItem = async () => {
	try {
		const response = await instance.get("/item");
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error(error.response.data.message || "Something went wrong");
	}
};

export const createNewItem = async (data) => {
	try {
		const response = await instance.post("/dashboard/item", data, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message || "Something went wrong");
	}
};
