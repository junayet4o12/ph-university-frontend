import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";


export default function AcademicSemester() {
    const { data, isLoading, error } = useGetAllSemestersQuery(undefined);
    console.log({ data, isLoading, error });

    return (
        <div>
            <h1>This is AcademicSemester component.</h1>
        </div>
    );
}