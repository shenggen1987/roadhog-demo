import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/order?limit=${PAGE_SIZE}`);
}

export function condition() {
  return request('/api/ordersCondition');
}

