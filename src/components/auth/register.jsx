"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onsubmit = (data) => {
    const user = createUser({
      username: data.username,
      password: data.password,
    });

    user
      .then((response) => {
        if (response.id) {
          router.push("/");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => console.log(error));
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password_confirm")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const createUser = async (data) => {
  return fetch("https://ehealth237.onrender.com/ehealth/auth/users/", {
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
