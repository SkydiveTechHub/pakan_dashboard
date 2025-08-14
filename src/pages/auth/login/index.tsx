import { LoginForm } from "./component/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-[90%] lg:w-[50%] max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
