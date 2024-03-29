import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItemKeys = async () => {
	return await AsyncStorage.getAllKeys();
};

export const storeItem = async (itemKey: string, data: any): Promise<any> => {
	try {
		await AsyncStorage.setItem(itemKey, JSON.stringify({ data }));
	} catch (error) {
		console.log("Async-storage-error: Store item");
	}
};

export const getItem = async (itemKey: string): Promise<any> => {
	try {
		const data: any = await AsyncStorage.getItem(itemKey);

		return data ? JSON.parse(data) : null;
	} catch (error) {
		console.log("Async-storage-error: Get item");
	}
};

export const deleteItem = async (itemKey: string): Promise<any> => {
	try {
		await AsyncStorage.removeItem(itemKey);
	} catch (error) {
		console.log("Async-storage-error: Delete item");
	}
};
