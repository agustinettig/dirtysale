import { BusinessError } from "../error/BusinessError";

export class OrderRepository {

    private static instance: OrderRepository;
    private map : Map<string, string> = new Map();

    static getInstance(): OrderRepository {
        if (!this.instance) {
            this.instance = new OrderRepository();
        }
        return this.instance;
    }

    save(orderId : string, primaryDocument : string)  {
        if (this.map.get(orderId)) {
            const model = new Map();
            model.set("existing-orders", [orderId]);
            throw new BusinessError(400, "The request is invalid.", model);
        }
        this.map.set(orderId, primaryDocument);
    }

    findDocumentNumberByOrderId(orderId: string) : string{
        const response = this.map.get(orderId);
        if (!response) {
            throw new BusinessError(404, "Not found");
        }
        return response;
    }
}