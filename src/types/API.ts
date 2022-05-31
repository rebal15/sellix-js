export interface SellixApiResponse<T> {
    status: number;
    data: T;
    message: string | null;
    log: string | null;
    error: string | null;
    env: 'production' | 'development';
}

export interface SellixCustomer {
    id?: string;
    email: string;
    name: string;
    surname: string;
    phone?: number;
    phone_country_code?: string;
    country_code?: string;
    street_address?: string;
    additional_address_info?: any;
    city?: string;
    postal_code?: number;
    state?: string;
}

export interface FraudShield {
    ip: string;
    userAgent: string;
    userLanguage: string;
}

export interface SellixPaymentCart {
    products: { uniqid: string; unitQuantity: number }[];
}

export enum GatewayTypes {
    PAYPAL,
    ETHEREUM,
    BITCOIN,
    BITCOINCASH,
    LITECOIN,
    SKRILL,
    STRIPE,
    PERFECTMONEY,
    CASHAPP,
    LEXHOLDINGSGROUP,
    PAYDASH,
    MONERO,
    NANO,
    SOLANA,
    RIPPLE,
}

export interface SellixProduct {
    title: string;
    price: number;
    description: string;
    currency?: string;
    gateways?: string[];
    type: string;
    serials?: string[];
    serialsRemoveDuplicates?: boolean;
    serviceText?: string;
    stock?: number;
    dynamicWebhook?: string;
    stockDelimiter?: string;
    minQuantity?: number;
    maxQuantity?: number;
    deliveryText?: string;
    customFields?: object[];
    cryptoConfirmationsNeeded?: number;
    maxRiskLevel?: number;
    unlisted?: boolean;
    private?: boolean;
    blockVpnProxies?: boolean;
    sortPriority?: number;
    webhooks?: string[];
    onHold?: boolean;
    termsOfService?: string;
    warranty?: number;
    warrantyText?: string;
    removeImage?: boolean;
    removeFile?: boolean;
    volumeDiscounts?: object[];
    recurringInterval?: string;
    recurringIntervalCount?: number;
    trialPeriod?: number;
}

export interface SellixPayment {
    title?: string;
    productId?: string;
    cart?: SellixPaymentCart;
    gateway?: GatewayTypes;
    paypalApm?: any;
    creditCard?: any;
    lexPaymentMethod?: any;
    value?: number;
    currency?: string;
    quantity?: number;
    couponCode?: string;
    confirmations?: number;
    email: string;
    customFields?: object[];
    fraudShield?: FraudShield;
    webhook?: string;
    whiteLabel?: boolean;
    returnUrl?: string;
}

export enum SubscriptionStatus {
    PENDING,
    CANCELED,
    TRIALING,
    ACTIVE,
}

// Customers API

export type GetCustomersResponse = SellixApiResponse<{ customers: SellixCustomer[] }>;

export type GetCustomerResponse = SellixApiResponse<{ customer: SellixCustomer }>;

export type CreateCustomerResponse = SellixApiResponse<{ customerId: string }>;

export type UpdateCustomerResponse = SellixApiResponse<null>;

// Payment API

export type CreatePaymentResponse = SellixApiResponse<{ url: string; uniqid: string }>;

// Products API

export type GetProductsResponse = SellixApiResponse<{ products: SellixProduct[] }>;

export type GetProductResponse = SellixApiResponse<{ product: SellixProduct }>;

export type CreateProductResponse = SellixApiResponse<null>;

export type UpdateProductResponse = SellixApiResponse<null>;

export type DeleteProductResponse = SellixApiResponse<null>;