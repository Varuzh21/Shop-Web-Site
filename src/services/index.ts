import api from "./apiService";

export const getSingleProduct = async (productId: number) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
}