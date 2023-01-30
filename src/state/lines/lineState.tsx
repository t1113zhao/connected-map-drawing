import { StateObject } from "../modelstate";

export interface Line extends StateObject {
    uid: string;
    arrayNum: number;
    agencyId: string;
    name: string;
    description: string;
    color: string;
    services: string[]
}

export type AddLinePayload = {
    agencyId: string;
    name: string;
    description: string;
    color: string
}

export type EditLinePayload = {
    name: string;
    description: string;
    color: string
}

export type RemoveLinePayload = {
    uid: string
}