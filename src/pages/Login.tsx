import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


export default function Login() {
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: 'A-0001',
  //     password: 'admin123'
  //   }
  // });
  const defaultValues = {
    id: 'A-0001',
    password: 'admin123'
  }
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const onSubmit = async (data: FieldValues) => {
    const userInfo = {
      id: data.id,
      password: data.password
    }
    console.log(userInfo);

    const toastId = toast.loading('logging...')
    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser
      dispatch(setUser({
        user,
        token: res.data.accessToken
      }))
      toast.success('Logged in successfully!', { id: toastId, duration: 2000 })
      navigate(`/${user.role}/dashboard`)
    } catch (err) {
      toast.error(`${err?.status}: ${err?.data?.message}`, { id: toastId, duration: 2000 })
    }
  }
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="password" name="password" label="Password:" />
        <Button htmlType="submit" >Login</Button>
      </PHForm>
    </Row>
  );
}