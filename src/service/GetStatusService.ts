import { StatusDTO } from "../model/dto/status/StatusDTO";
import { StatusEnum } from "../model/enum/StatusEnum";
import { OrderRepository } from "../repository/OrderRepository";

export class GetStatusService {

    execute(orderId: string): StatusDTO {
        const document = OrderRepository.getInstance().findDocumentNumberByOrderId(orderId);        
        const lastDigit = Number(document) % 10;
        return {
            code: orderId,
            status: StatusEnum[lastDigit],
            score: 50
        };
    }
}