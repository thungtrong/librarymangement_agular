export interface Item {
    title: string;
    path: string;
    iconClass?: string
}

export interface Page<T> {
    content: T[];
    pageable: any;
    last: boolean;
    first: boolean;
    totalPages: number
}

export interface MemberType
{
    id?: number;
    name?: string;
    description?: string;
}

export interface Member
{
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: boolean;
    dateOfBirth?: Date;
    contact?: string;
    email?: string;
    memberType?: MemberType
}

export interface Category
{
    id?: number;
    name?: string;
    shortname?: string;
    description?: string;
}

export interface Language
{
    id?: number;
    name?: string;
    shortname?: string;
    note?: string;
}

export interface Librarian
{
    id?: number,
    firstName?: string,
    lastName?: string,
    gender?: boolean,
    dateOfBirth?: Date,
    contact?: string,
    email?: string,
    
}

export interface Book
{
    id?: number,
    title?: string,
    authors?: string,
    tag?: string,
    status: boolean,
    typeDocument: number,
    publisher?: string,
    img?: string,
    description?: string
    language?: Language,
    category?: Category
}

export interface Language
{
    id?: number,
    name?: string,
    shortname?: string,
    note?: string
}

export interface BookIssue 
{
    id?: number,
    dateStart?: Date,
    dateEnd?: Date,
    note?: string,
    status?: boolean
}