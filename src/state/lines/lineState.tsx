export type Line = {
    uid: string,
    number: string,
    agencyId: string,
    name: string,
    description: string,
    color: string,
    services: string[]
}

export type AddLinePayload = {
    agencyId: string,
    name: string,
    description: string,
    color: string
}

export type EditLinePayload = {
    name: string,
    description: string,
    color: string
}

export type RemoveLinePayload = {
    uid: string
}