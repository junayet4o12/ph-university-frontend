import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { zodResolver } from '@hookform/resolvers/zod'
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { errorMessageGenerator } from "../../../utils/errorMessageGenerator";
import { semesterMonthOptions, semesterNameOptions, semesterYearOptions } from "../../../const/academicSemester.const";



export default function CreateAcademicSemester() {
  const [addAcademicSemester] = useAddAcademicSemesterMutation()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Academic Semester is Creating...')
    try {
      await addAcademicSemester(data).unwrap();
      toast.success('Academic Semester Created Successfully!', { id: toastId })
    } catch (err: any) {

      toast.error(errorMessageGenerator(err), { id: toastId })
    }
  }


  return (
    <Flex justify="center" align="center">
      <Col xs={24} sm={16} md={12} lg={8}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <PhSelect name="name" options={semesterNameOptions} label="Name" />
          <PhSelect name="year" options={semesterYearOptions} label="Year" />
          <PhSelect name="startMonth" options={semesterMonthOptions} label="Start Month" />
          <PhSelect name="endMonth" options={semesterMonthOptions} label="End Month" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}