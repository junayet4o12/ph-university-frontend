import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemesters: builder.query({
        //     query: (args: TQueryParams[] | undefined) => {
        //         const params = new URLSearchParams();
        //         if (args) {
        //             args.forEach((item) => {
        //                 params.append(item?.name as string, item?.value as string);
        //             })
        //         }
        //         return {
        //             url: '/academic-semesters',
        //             method: 'GET',
        //             params: params
        //         }
        //     },
        //     transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //         return {
        //             data: response.data,
        //             meta: response.meta,
        //         }
        //     }
        // }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: '/users/create-student',
                method: 'POST',
                body: data,
            })
        }),
    })
})


export const { useAddStudentMutation } = userManagementApi

