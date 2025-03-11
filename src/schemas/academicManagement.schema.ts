import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: 'Select a Name' }),
    year: z.string({ required_error: 'Select a Year' }),
    startMonth: z.string({ required_error: 'Select a Start month' }),
    endMonth: z.string({ required_error: 'Select an End month' }),
})

export const academicFacultySchema = z.object({
    name: z.string({ required_error: 'Name is Required' })
})

export const academicDepartmentSchema= z.object({
    name: z.string({ required_error: 'Name is required' }),
    academicFaculty: z.string({ required_error: 'Academic Faculty is required' })
})
