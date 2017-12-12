import { Address } from "./address.model";
import { Company } from "./company.model";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website?: string;
    address?: Address;
    company?: Company;
}
