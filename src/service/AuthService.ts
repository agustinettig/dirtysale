import { add } from "date-fns";

import { TokenDTO } from "../model/dto/auth/TokenDTO";

export class AuthService {

    execute(name: string, password: string): TokenDTO {
        const date = add(new Date(), {
            hours: 2
        });
        return {
            Token: "fdgjkshbfdjkghsfdjklghsdfg",
            ExpirationDate: date
        };
    }
}