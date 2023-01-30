import { StateObject } from "../modelstate";

export interface Agency extends StateObject {
    uid: string;
    arrayNum: number;
    name: string;
    description: string;
    color: string;
    lines: string[];
}

export type AddAgencyPayload = {
    name: string;
    description: string;
    color: string;
}

export type RemoveAgencyPayload = {
    uid: string
}

export type EditAgencyPayload = {
    uid: string;
    name: string;
    description: string;
    color: string
}