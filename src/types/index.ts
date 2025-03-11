export * from './sidebar.type'
export * from './global.type'
export * from './academicManagement.type'
export * from './academicFaculty.type'
export type TRole = 'admin' | 'student' | 'faculty'
export type TUser = {
    userId: string;
    role: TRole;
    iat: number;
    exp: number;
}