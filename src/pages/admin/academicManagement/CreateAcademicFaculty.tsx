import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { errorMessageGenerator } from "../../../utils/errorMessageGenerator";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";


export default function CreateAcademicFaculty() {
  const [addAcademicSemester] = useAddAcademicFacultyMutation()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Academic Faculty is Creating...')
    try {
      await addAcademicSemester(data).unwrap();
      toast.success('Academic Faculty Created Successfully!', { id: toastId })
    } catch (err: any) {

      toast.error(errorMessageGenerator(err), { id: toastId })
    }
  }
  return (
    <Flex justify="center" align="center">
    <Col xs={12} sm={12} md={8} lg={6}>
      <PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
        <PHInput name="name" label="Name" />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Col>
  </Flex>
  );
}