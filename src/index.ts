import SellixAPI from './SellixAPI';

// Main class

export default SellixAPI;

// API Types

export {
    SellixApiResponse,
    Customer,
    Product,
    ProductType,
    ProductSubtype,
    Currency,
    VolumeDiscount,
    GatewayType,
    Payment,
    PaymentCart,
    FraudShield,
    Invoice,
    InvoiceType,
    InvoiceStatusType,
    InvoiceStatus,
    IPInfo,
    File,
    Webhook,
    WebhookEvent,
    CryptoPayoutTransaction,
    CryptoTransaction,
    PaypalDispute,
    PaypalDisputeMessage,
} from './types/API';

// API Requests

export {
    CreateCustomerRequest,
    UpdateCustomerRequest,
    CreateProductRequest,
    UpdateProductRequest,
    CreatePaymentRequest,
} from './types/API';

// API Responses

export {
    GetCustomerResponse,
    GetCustomersResponse,
    CreateCustomerResponse,
    UpdateCustomerResponse,
    GetProductResponse,
    GetProductsResponse,
    CreateProductResponse,
    UpdateProductResponse,
    DeleteProductResponse,
    CreatePaymentWhiteLabelResponse,
    CreatePaymentNonWhiteLabelResponse,
    DeletePaymentResponse,
} from './types/API';
