import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import {
    CreateCustomerRequest,
    CreateCustomerResponse,
    CreatePaymentWhiteLabelResponse,
    CreatePaymentNonWhiteLabelResponse,
    CreateProductResponse,
    GetCustomerResponse,
    GetCustomersResponse,
    GetProductResponse,
    GetProductsResponse,
    Customer,
    Payment,
    Product,
    UpdateCustomerResponse,
    UpdateProductResponse,
    DeletePaymentResponse,
    CreateProductRequest,
    UpdateProductRequest,
} from './types/API';

import { SellixAPIConfig } from './types/SellixAPIConfig';

export default class SellixAPI {
    readonly config: SellixAPIConfig;
    readonly request: AxiosInstance;

    constructor(apiConfig: SellixAPIConfig, requestConfig?: AxiosRequestConfig) {
        this.config = {
            baseUrl: 'https://dev.sellix.io/v1/',
            ...apiConfig,
        };

        const headers: AxiosRequestHeaders = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.config.apiKey}`,
        };

        if (apiConfig.merchant) {
            headers['X-Sellix-Merchant'] = apiConfig.merchant;
        }

        this.request = axios.create({
            baseURL: this.config.baseUrl,
            headers,
            withCredentials: true,
            ...requestConfig,
        } as AxiosRequestConfig);
    }

    // Customers

    getCustomers = async () => await (await this.request.get<GetCustomersResponse>('customers')).data;

    createCustomer = async (params: CreateCustomerRequest) =>
        await (
            await this.request.post<CreateCustomerResponse>('customers', params)
        ).data;

    updateCustomer = async (customerId: string, params: Omit<Partial<Customer>, 'id'>) =>
        await (
            await this.request.put<UpdateCustomerResponse>(`customers/${customerId}`, params)
        ).data;

    getCustomer = async (customerId: string) =>
        await (
            await this.request.get<GetCustomerResponse>(`customers/${customerId}`)
        ).data;

    // Payments

    createPayment = async (paymentDetails: Payment) => {
        if (paymentDetails.white_label) {
            return await (
                await this.request.post<CreatePaymentWhiteLabelResponse>('payments', paymentDetails)
            ).data;
        } else {
            return await (
                await this.request.post<CreatePaymentNonWhiteLabelResponse>('payments', paymentDetails)
            ).data;
        }
    };

    deletePayment = async (uniqid: string) =>
        await (
            await this.request.delete<DeletePaymentResponse>(`payments/${uniqid}`)
        ).data;

    // Products

    getProducts = async () => await (await this.request.get<GetProductsResponse>('products')).data;

    getProduct = async (productId: string) =>
        await (
            await this.request.get<GetProductResponse>(`products/${productId}`)
        ).data;

    createProduct = async (params: CreateProductRequest) =>
        await (
            await this.request.post<CreateProductResponse>('products', params)
        ).data;

    updateProduct = async (productId: string, params: UpdateProductRequest) =>
        await (
            await this.request.put<UpdateProductResponse>(`products/${productId}`, params)
        ).data;
}
