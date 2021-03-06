import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, notification, Space } from "antd";
import { UserStore } from "../store";
const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const { setToken } = UserStore();
  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      let result = await axios.post(
        "http://localhost:6969/api/auth/login",
        {
          username,
          password,
          remember,
        },
        { withCredentials: true }
      );
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      router.push("/");
    } catch (err) {
      openNotificationWithIcon("error");
    }
  };
  const reMem = async () => {
    setRemember(!remember);
  };
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "เข้าสู่ระบบผิดพลาด",
      description: "กรุณาตรวจสอบชื่อผู้ใช้งานหรือรหัสผู้ใช้งานให้ถูกต้อง",
    });
  };
  const guestUser = async () => {
    try {
      let result = await axios.get("http://localhost:6969/api/auth/guest")
      //console.log(result.data);
      try {
        let resultSignin = await axios.post(
          "http://localhost:6969/api/auth/login",
          {
            username: result.data.username,
            password: "123456",
            remember,
          },
          { withCredentials: true }
        );
        localStorage.setItem("token", resultSignin.data.token);
        //setToken(resultSignin.data.token);
        router.push("/");
      } catch (err) {
        openNotificationWithIcon("error");
      }
    } catch (e) {
      console.log(e);
      alert("มีชื่อผู้ใช้งานนี้ในระบบแล้ว");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto w-auto" src="logo.png" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="text-sm self-start">
              <span className="pr-2">Don't have an account?</span>
              <a
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 mr-2"
              >
                Sign up
              </a>
              <span className="pr-2">or</span>
              <a
                onClick={guestUser}
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Guest user
              </a>
            </div>
            <div className="flex items-center self-end ">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onClick={reMem}
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
