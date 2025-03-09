export * from './sidebar.type'

export type TRole = 'admin' | 'student' | 'faculty'
export type TUser = {
    userId: string;
    role: TRole;
    iat: number;
    exp: number;
}