import { BaseEntity } from "./index";

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export type OrderStatus = "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED" | "REFUNDED";

export interface Order extends BaseEntity {
  userId: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  notes?: string;
}
