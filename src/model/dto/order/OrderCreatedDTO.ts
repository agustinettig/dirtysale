import { StatusDTO } from "../status/StatusDTO";

export interface OrderCreatedDTO {
    packageID: string;
    orders: StatusDTO[]
}