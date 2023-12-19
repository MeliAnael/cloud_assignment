"use client";

import { useForm } from "react-hook-form";
import { Cookies } from "react-cookie";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cookie = new Cookies();
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);
  const cookieOptionsForDomain = { expires: expirationDate, path: "/" };
  const router = useRouter();

  const onsubmit = (data) => {
    const user = loginUser({
      username: data.username,
      password: data.password,
    });

    user.then((response) => {
      cookie.set("auth", response.access, cookieOptionsForDomain);
      router.replace("/");
    });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              {...register("username")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const loginUser = async (data) => {
  return fetch("https://ehealth237.onrender.com/ehealth/auth/jwt/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
