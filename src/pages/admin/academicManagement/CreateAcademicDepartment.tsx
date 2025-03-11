import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { errorMessageGenerator } from "../../../utils/errorMessageGenerator";
import { toast } from "sonner";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";
import PhSelect from "../../../components/form/PhSelect";


export default function CreateAcademicDepartment() {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation()
  const { data: academicFaculty, isLoading } = useGetAllAcademicFacultyQuery(undefined);
  if (isLoading) {
    return ''
  }
  console.log(academicFaculty?.data);

  const academicFacultyOptions = academicFaculty?.data?.map(item => ({
    label: item.name || '',
    value: item._id || '',
  })) as { label: string; value: string }[]
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Academic Department is Creating...')
    try {
      await addAcademicDepartment(data).unwrap();
      toast.success('Academic Department Created Successfully!', { id: toastId })
    } catch (err: any) {

      toast.error(errorMessageGenerator(err), { id: toastId })
    }
  }
  return (
    <Flex justify="center" align="center">
      <Col xs={12} sm={12} md={8} lg={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
          <PHInput name="name" label="Name" />
          <PhSelect name="academicFaculty" options={academicFacultyOptions} label="Academic Faculty" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}