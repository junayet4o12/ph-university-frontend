import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Flex, Row } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { bloodGroups } from "../../../const/user.const";
const colData = { span: 24, md: { span: 12 }, lg: { span: 8 } };
const bloodGroupOptions = bloodGroups.map(item => ({ label: item, value: item }))
const studentDummyData = {

  "password": "student123",
  "student": {
    "name": {
      "firstName": "Junayet",
      "middleName": "Alam",
      "lastName": "Hossain"
    },
    "role": "student",
    "gender": "male",
    "dateOfBirth": "2002-05-15",
    "bloodGroup": "O+",

    "email": "junayet2@example.com",
    "presentAddress": "House-12, Road-5, Dhanmondi, Dhaka",
    "permanentAddress": "Village- Kamaruddin, Post- Feni Sadar, District- Feni",
    "contact": "01812345677",
    "emergencyContact": "01798765432",

    "guardian": {
      "fatherName": "Abdul Karim",
      "fatherOccupation": "Businessman",
      "fatherContact": "01911223344",
      "motherName": "Fatema Begum",
      "motherOccupation": "Housewife",
      "motherContact": "01876543210"
    },

    "localGuardian": {
      "name": "Kamal Hossain",
      "occupation": "Government Officer",
      "contactNo": "01733445566",
      "address": "House-22, Sector-10, Uttara, Dhaka"
    },


    "admissionSemester": "67bec0018efaf1d0cb612556",
    "academicDepartment": "67bebf098efaf1d0cb612553",
    "isDeleted": false
  }
}
const onSubmit: SubmitHandler<FieldValues> = (data) => {
  console.log(data);

  // const formData = new FormData();
  // formData.append('data', JSON.stringify(studentDummyData));
  // console.log(Object.fromEntries(formData));

}

export default function CreateStudent() {
  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Row gutter={30}>
            <Divider>Personal Info</Divider>
            <Col {...colData}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col {...colData}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col {...colData}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col {...colData}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col {...colData}>
              <PHInput type="text" name="dateOfBirth" label="Date Of Birth" />
            </Col>
            <Col {...colData}>
              <PhSelect name="bloodGroup" label="Blood Group" options={bloodGroupOptions} />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}