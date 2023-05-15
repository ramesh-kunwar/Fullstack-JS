import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, { message: "Name must be atlest 3characters" }),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }

const FormExe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" {...register("name")} />
        {errors.name && <p className="text-danger">{errors.name.message} </p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age">Age</label>
        <input type="number" className="form-control" {...register("age")} />
      </div>
      <button className="btn-primary btn" value={"submit"}>
        Submit
      </button>
    </form>
  );
};

export default FormExe;
