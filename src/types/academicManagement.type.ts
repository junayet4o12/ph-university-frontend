export type TMonths = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
export type TAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
    _id: string;
    name: TAcademicSemesterName;
    code?: TAcademicSemesterCode;
    year: String;
    startMonth: TMonths;
    endMonth: TMonths;
    createdAt: string;
    updatedAt: string;
    _v: number;
}