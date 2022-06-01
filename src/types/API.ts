export type GatewayType =
    | 'PAYPAL'
    | 'ETHEREUM'
    | 'BITCOIN'
    | 'BITCOIN_CASH'
    | 'LITECOIN'
    | 'SKRILL'
    | 'STRIPE'
    | 'PERFECT_MONEY'
    | 'CASH_APP'
    | 'LEX_HOLDINGS_GROUP'
    | 'PAYDASH'
    | 'MONERO'
    | 'NANO'
    | 'SOLANA'
    | 'RIPPLE';

export type Currency =
    | 'CAD'
    | 'HKD'
    | 'ISK'
    | 'PHP'
    | 'DKK'
    | 'HUF'
    | 'CZK'
    | 'GBP'
    | 'RON'
    | 'SEK'
    | 'IDR'
    | 'INR'
    | 'BRL'
    | 'RUB'
    | 'HRK'
    | 'JPY'
    | 'THB'
    | 'CHF'
    | 'EUR'
    | 'MYR'
    | 'BGN'
    | 'TRY'
    | 'CNY'
    | 'NOK'
    | 'NZD'
    | 'ZAR'
    | 'USD'
    | 'MXN'
    | 'SGD'
    | 'AUD'
    | 'ILS'
    | 'KRW'
    | 'PLN';

export interface SellixApiResponse<T> {
    status: number;
    data: T;
    message?: string;
    log?: string;
    error?: string;
    env?: 'production' | 'development';
}
export interface Customer {
    id?: string;
    email?: string;
    name?: string;
    surname?: string;
    phone?: number;
    phone_country_code?: string;
    country_code?: string;
    street_address?: string;
    additional_address_info?: string;
    city?: string;
    postal_code?: string | number;
    state?: string;
}

export interface VolumeDiscount {
    quantity?: number;
    type?: 'PERCENTAGE' | 'FIXED';
    value?: number;
}

export interface Product {
    id?: number;
    uniqid?: string;
    shop_id?: number;
    type?: ProductType;
    subtype?: ProductSubtype;
    title?: string;
    currency?: Currency;
    price?: number;
    price_display?: number;
    description?: string;
    image_attachement?: string;
    file_attachment?: string;
    volume_discounts?: VolumeDiscount[];
    recurring_interval?: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
    trial_period?: number;
    paypal_product_id?: string;
    paypal_plan_id?: string;
    stripe_price_id?: string;
    quantity_min?: number;
    quantity_max?: number;
    quantity_warning?: number;
    gateways?: GatewayType[];
    custom_fields?: object[];
    crypto_confirmations_needed?: number;
    max_risk_level?: number;
    block_vpn_proxies?: boolean;
    delivery_test?: string;
    service_test?: string;
    stock_delimeter?: string;
    stock?: number;
    dynamic_webhook?: string;
    sort_priority?: number;
    unlisted?: boolean;
    on_hold?: boolean;
    terms_of_service?: string;
    warranty?: number;
    warranty_text?: string;
    private?: boolean;
    name?: string;
    cloudflare_image_id?: string;
    serials?: string[];
    webhooks?: string[];
    feedback?: object;
    theme?: 'dark' | 'light';
    dark_mode?: 1 | 0;
    average_score?: number;
    sold_count?: number;
    lex_payment_methods?: string[];
    created_at?: number;
    updated_at?: number;
    updated_by?: number;
}

export type ProductType = 'SERIALS' | 'FILE' | 'DYNAMIC' | 'INFO_CARD' | 'SUBSCRIPTION';
export type ProductSubtype = 'SERIALS' | 'FILE' | 'DYNAMIC' | 'INFO_CARD';

export interface Payment {
    title?: string;
    product_id?: string;
    cart?: PaymentCart;
    gateway?: GatewayType;
    paypal_apm?: string;
    credit_card?: boolean;
    value?: number;
    currency?: Currency;
    quantity?: number;
    coupon_code?: string;
    confirmations?: number;
    email?: string;
    custom_fields?: object[];
    fraud_shield?: FraudShield;
    webhook?: string;
    white_label?: boolean;
    return_url?: string;
}

export interface PaymentCart {
    products: { uniqid: string; unit_quantity: number }[];
}

export interface FraudShield {
    ip?: string;
    user_agent?: string;
    user_language?: string;
}

export interface Invoice {
    id?: number;
    uniqid?: string;
    recurring_billing_id?: string;
    total?: number;
    total_display?: number;
    exchange_rate?: number;
    crypto_exchange_rate?: number;
    currency?: Currency;
    shop_id: number;
    cloudfare_image_id?: string;
    name?: string;
    type?: InvoiceType;
    customer_email?: string;
    paypal_email_delivery?: boolean;
    product_id?: string;
    product_title?: string;
    product_type?: ProductType;
    subtype?: ProductSubtype;
    subscription_id?: number;
    subscription_time?: number;
    gateway?: GatewayType;
    paypal_apm?: string;
    paypal_order_id?: string;
    paypal_fee?: string;
    paypal_payer_email?: string;
    paypal_subscription_id?: number;
    paypal_subscription_link?: number;
    stripe_client_secret?: string;
    stripe_price_id?: string;
    skrill_email?: string;
    skrill_sid?: string;
    skrill_link?: string;
    perfectmoney_id?: string;
    crypto_address?: string;
    crypto_amount?: number;
    crypto_received?: number;
    crypto_uri?: string;
    crypto_confirmations_needed?: number;
    crypto_scheduled_payout?: boolean;
    crypto_payout?: boolean;
    fee_billed?: boolean;
    bill_info?: object;
    cashapp_qrcode?: string;
    cashapp_cashtag?: string;
    cashapp_note?: string;
    country?: string;
    location?: string;
    ip?: string;
    is_vpn_or_proxy?: boolean;
    user_agent?: string;
    quantity?: number;
    coupon_id?: string;
    custom_fields?: object;
    developer_invoice?: boolean;
    developer_title?: string;
    developer_webhook?: string;
    developer_return_url?: string;
    status?: InvoiceStatusType;
    status_details?: 'CART_PARTIAL_OUT_OF_STOCK' | '';
    void_details?: 'PRODUCT_SOLD_OUT' | 'CART_PRODUCTS_SOLD_OUT';
    discount?: number;
    fee_percentage?: number;
    ip_info?: IPInfo;
    serials?: string[];
    file?: File;
    service_text?: string;
    dynamic_response?: string;
    webhooks?: Webhook[];
    crypto_payout_transaction?: CryptoPayoutTransaction;
    paypal_dispute?: PaypalDispute;
    status_history?: InvoiceStatus[];
    crypto_transactions?: CryptoTransaction[];
    gatways_available?: GatewayType[];
    shop_paypal_credit_card?: boolean;
    shop_force_paypal_email_delivery?: boolean;
    product?: Product;
    created_at?: number;
    updated_at?: number;
    updated_by?: number;
}

export type InvoiceType =
    | 'PRODUCT'
    | 'SUBSCRIPTION'
    | 'PUBLIC_REST_API'
    | 'MONTHLY_BILL'
    | 'SHOPPING_CART'
    | 'PRODUCT_SUBSCRIPTION';

export interface IPInfo {
    success?: boolean;
    message?: string;
    fraud_score?: number;
    country_code?: string;
    region?: string;
    city?: string;
    ISP?: string;
    ASN?: string;
    operating_system?: string;
    browser?: string;
    organization?: string;
    is_crawler?: boolean;
    timezone?: string;
    mobile?: boolean;
    host?: string;
    proxy?: boolean;
    vpn?: boolean;
    tor?: boolean;
    active_vpn?: boolean;
    active_tor?: boolean;
    device_brand?: string;
    device_model?: string;
    recent_abuse?: boolean;
    bot_status?: boolean;
    connection_type?: string;
    abuse_velocity?: string;
    zip_code?: string;
    latitude?: number;
    longitude?: number;
    request_id?: string;
}

export type InvoiceStatusType =
    | 'PENDING'
    | 'COMPLETED'
    | 'VOIDED'
    | 'WAITING_FOR_CONFIRMATIONS'
    | 'PARTIAL'
    | 'CUSTOMER_DISPUTE_ONGOING'
    | 'REVERSED'
    | 'REFUNDED'
    | 'WAITING_SHOP_ACTION'
    | 'PROCESSING';

export interface InvoiceStatus {
    id?: number;
    invoice_id?: string;
    status?: InvoiceStatusType;
    details?: string;
    created_at?: number;
}

export interface File {
    id?: number;
    uniqid?: string;
    cloudflare_image_id?: string;
    name?: string;
    original_name?: string;
    extension?: string;
    shop_id?: number;
    size?: number;
    created_at?: number;
}

export interface Webhook {
    uniqid?: string;
    url?: string;
    event?: WebhookEvent;
    retries?: number;
    response_code?: number;
    created_at?: number;
    payload?: string;
    response?: string;
}

export type WebhookEvent =
    | 'order:created'
    | 'order:updated'
    | 'order:partial'
    | 'order:paid'
    | 'order:paid:product'
    | 'order:cancelled'
    | 'product:created'
    | 'product:stock'
    | 'product:edited'
    | 'product:dynamic'
    | 'query:created'
    | 'query:replied'
    | 'feedback:received'
    | 'order:partial:product'
    | 'order:created:product'
    | 'order:disputed:product'
    | 'order:disputed'
    | 'order:cancelled:product'
    | 'order:updated:product'
    | 'subscription:trial:started'
    | 'subscription:trial:ended'
    | 'subscription:created'
    | 'subscription:updated'
    | 'subscription:renewed'
    | 'subscription:cancelled'
    | 'subscription:upcoming';

export interface CryptoPayoutTransaction {
    to_address?: string;
    from_address?: string;
    crypto_amount?: number;
    hash?: string;
    created_at?: number;
}

export interface PaypalDispute {
    id?: string;
    invoice_id?: string;
    shop_id?: number;
    reason?:
        | 'MERCHANDISE_OR_SERVICE_NOT_RECEIVED'
        | 'INCORRECT_AMOUNT'
        | 'MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED'
        | 'PAYMENT_BY_OTHER_MEANS'
        | 'UNAUTHORISED'
        | 'CANCELED_RECURRING_BILLING'
        | 'CREDIT_NOT_PROCESSED'
        | 'PROBLEM_WITH_REMITTANCE'
        | 'DUPLICATE_TRANSACTION'
        | 'OTHER';
    status?:
        | 'OPEN'
        | 'UNDER_REVIEW'
        | 'WAITING_FOR_BUYER_RESPONSE'
        | 'RESOLVED'
        | 'WAITING_FOR_SELLER_RESPONSE'
        | 'OTHER';
    outcome?:
        | 'RESOLVED_BUYER_FAVOUR'
        | 'CANCELLED_BY_BUYER'
        | 'RESOLVED_SELLER_FAVOUR'
        | 'ACCEPTED'
        | 'RESOLVED_WITH_PAYOUT'
        | 'DENIED'
        | 'NONE';
    messages?: PaypalDisputeMessage[];
    life_cycle_stage?: 'INQUIRY' | 'ARBITRATION' | 'CHARGEBACK' | 'PRE_ARBITRATION';
    seller_response_due_date?: number;
    created_at?: number;
    updated_at?: number;
}

export interface PaypalDisputeMessage {
    posted_by?: 'BUYER' | 'ARBITER' | 'SELLER';
    content?: string;
    created_at?: number;
}

export interface CryptoTransaction {
    crypto_amount?: number;
    hash?: string;
    confirmations?: number;
    created_at?: number;
    updated_at?: number;
}

// Customers API

export type GetCustomersResponse = SellixApiResponse<{ customers: Customer[] }>;

export type GetCustomerResponse = SellixApiResponse<{ customer: Customer }>;

export type CreateCustomerRequest = Omit<Customer, 'id'> & { email: string; name: string; surname: string };
export type CreateCustomerResponse = SellixApiResponse<{ customerId: string }>;

export type UpdateCustomerRequest = Omit<Customer, 'id'>;
export type UpdateCustomerResponse = SellixApiResponse<null>;

// Payment API

export type CreatePaymentRequest = Payment & { email: string };
export type CreatePaymentNonWhiteLabelResponse = SellixApiResponse<{ url: string; uniqid: string }>;
export type CreatePaymentWhiteLabelResponse = SellixApiResponse<{ invoice: Invoice }>;

export type DeletePaymentResponse = SellixApiResponse<null>;

// Products API

export type GetProductsResponse = SellixApiResponse<{ products: Product[] }>;

export type GetProductResponse = SellixApiResponse<{ product: Product }>;

export type CreateProductRequest = Omit<Product, 'id' | 'uniqid'> & {
    title: string;
    price: number;
    description: string;
    type: ProductType;
};
export type CreateProductResponse = SellixApiResponse<null>;

export type UpdateProductRequest = Omit<Product, 'id' | 'uniqid'> & {
    title: string;
    price: number;
    description: string;
    type: ProductType;
};
export type UpdateProductResponse = SellixApiResponse<null>;

export type DeleteProductResponse = SellixApiResponse<null>;
