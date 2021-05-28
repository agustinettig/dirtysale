import { format } from "date-fns";

import { api } from "../config/AxiosConfig";

export class StatsNotifier {

    async execute(orderId: string) {
        try {
            console.log(`notifying status change, orderId=${orderId}`);
            await api.post(process.env.RISK_STATUS_ENDPOINT || '/status', {
                code: orderId,
                date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSXXX"),
                type: "status"
            });
        } catch (err) {
            console.error('failed do notify status change', err);
        }
    }
}