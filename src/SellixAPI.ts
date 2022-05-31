import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import {
    CreateCustomerRequest,
    CreateCustomerResponse,
    CreatePaymentResponse,
    CreateProductResponse,
    GetCustomerResponse,
    GetCustomersResponse,
    GetProductResponse,
    GetProductsResponse,
    SellixCustomer,
    SellixPayment,
    SellixProduct,
    UpdateCustomerResponse,
    UpdateProductResponse,
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

    updateCustomer = async (customerId: string, params: Omit<Partial<SellixCustomer>, 'id'>) =>
        await (
            await this.request.put<UpdateCustomerResponse>(`customers/${customerId}`, params)
        ).data;

    getCustomer = async (customerId: string) =>
        await (
            await this.request.get<GetCustomerResponse>(`customers/${customerId}`)
        ).data;

    // Payments

    createPayment = async (paymentDetails: SellixPayment) =>
        await this.request.post<CreatePaymentResponse>('payments', paymentDetails).then;

    voidPayment = async (uniqid: string) =>
        await (
            await this.request.delete<CreatePaymentResponse>(`payments/${uniqid}`)
        ).data;

    // Products

    getProducts = async () => await (await this.request.get<GetProductsResponse>('products')).data;

    getProduct = async (productId: string) =>
        await (
            await this.request.get<GetProductResponse>(`products/${productId}`)
        ).data;

    createProduct = async (product: SellixProduct) =>
        await (
            await this.request.post<CreateProductResponse>('products', product)
        ).data;

    updateProduct = async (productId: string, product: SellixProduct) =>
        await (
            await this.request.put<UpdateProductResponse>(`products/${productId}`, product)
        ).data;
}
