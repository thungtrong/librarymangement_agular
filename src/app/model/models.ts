export interface Item {
    title: string,
    path: string,
    iconClass?: string
}

export interface Page<T> {
    content: T[],
    pageable: any
}

export interface MemberType
{
    id?: number,
    name?: string,
    description?: string,
}