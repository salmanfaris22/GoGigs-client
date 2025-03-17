import DefaultLayout from "./DefaultLayout";
import FormLayout from "./FormLayout";
import LoginForm from "./LoginForm";
import Illustration from "./Illustration";

export default function Login() {
  return (
    <DefaultLayout>
      <FormLayout rightSide={<Illustration/>}>
        <LoginForm />
      </FormLayout>
    </DefaultLayout>
  );
}
