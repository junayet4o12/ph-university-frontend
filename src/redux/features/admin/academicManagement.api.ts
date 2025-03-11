import { TAcademicFaculty, TAcademicSemester, TQueryParams, TResponseRedux } from "../../../types";
import { TAcademicDepartment } from "../../../types/academicDepartment.type";
import { baseApi } from "../../api/baseApi";

export const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args: TQueryParams[] | undefined) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item?.name as string, item?.value as string);
                    })
                }
                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                }
            }
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create',
                method: 'POST',
                body: data,
            })
        }),
        getAllAcademicFaculty: builder.query({
            query: (args: TQueryParams[] | undefined) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item?.name as string, item?.value as string);
                    })
                }
                return {
                    url: '/academic-faculties',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                }
            }
        }),
        addAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: '/academic-faculties/create',
                method: 'POST',
                body: data,
            })
        }),
        getAllAcademicDepartment: builder.query({
            query: (args: TQueryParams[] | undefined) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item) => {
                        params.append(item?.name as string, item?.value as string);
                    })
                }
                return {
                    url: '/academic-departments',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                }
            }
        }),
        addAcademicDepartment: builder.mutation({
            query: (data) => ({
                url: '/academic-departments/create',
                method: 'POST',
                body: data,
            })
        }),
    })
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation, useGetAllAcademicFacultyQuery, useGetAllAcademicDepartmentQuery, useAddAcademicDepartmentMutation } = academicManagementApi