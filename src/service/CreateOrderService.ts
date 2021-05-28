import { v4 as uuid } from 'uuid';

import { OrderCreatedDTO } from "../model/dto/order/OrderCreatedDTO";
import { StatsNotifier } from '../notifier/StatusNotifier';
import { OrderRepository } from '../repository/OrderRepository';

export class CreateOrderService {

    execute(orderId: string, primaryDocument: string): OrderCreatedDTO {
        OrderRepository.getInstance().save(orderId, primaryDocument);
        const delay = process.env.RISK_STATUS_NOTIFICATION_DELAY || 5000;
        setTimeout(() => new StatsNotifier().execute(orderId), Number(delay));    ;
        return {
            packageID: uuid(),
            orders: [{
                code: orderId,
                status: "NVO"
            }]
        }
    }
}