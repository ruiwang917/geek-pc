import { Form, Input, Button, Checkbox, Card, message } from "antd";

import logo from "../../assets/logo.png";
import "./index.scss";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";

// Login page
function Login() {
  const { loginStore } = useStore();
  const naviagte = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      await loginStore.getToken({
        mobile: values.username,
        code: values.password,
      });
      naviagte("/", { replace: true });

      // message
      message.success("Login success");
    } catch (e) {
      message.error(e.response?.data?.message || "Login Failed");
    }
  };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* login form  */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
