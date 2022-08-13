export interface Item {
    title: string,
    path: string,
    iconClass?: string
}

export interface Page<T> {
    content: T[],
    pageable: any,
    last: boolean,
    first: boolean,
    totalPages: number
}

export interface MemberType
{
    id?: number,
    name?: string,
    description?: string,
}

export interface Member
{
    id?: number,
    firstName?: string,
    lastName?: string,
    gender?: boolean,
    dateOfBirth?: Date,
    contact?: string,
    email?: string
}