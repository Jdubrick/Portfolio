import { motion } from "framer-motion";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Contact({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:dubrickjordan@gmail.com?subject=${data.subject}&body=Hello, my name is ${data.name}. ${data.message}`;
    reset();
  };

  return (
    <div className="h-screen flex flex-col items-center max-w-7xl mx-auto overflow-hidden">
      <h1 className="text-xl sm:text-3xl uppercase tracking-[12px] text-gray-600 pt-[90px]">
        Contact
      </h1>
      <motion.form
        className="flex flex-col mx-2 pt-10 md:pt-[100px] w-[80%] md:w-[60%] space-y-3"
        onSubmit={handleSubmit(onSubmit)}
        initial={{
          x: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-3">
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className="bg-gray-700 bg-opacity-50 rounded px-2 h-12 w-[50%] outline-none focus:border-b-2"
          />
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="bg-gray-700 bg-opacity-50 rounded px-2 h-12 w-[50%] outline-none focus:border-b-2"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          type="text"
          className="bg-gray-700 bg-opacity-50 rounded px-2 h-12 outline-none focus:border-b-2"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="bg-gray-700 bg-opacity-50 rounded px-2 h-32 outline-none focus:border-b-2"
        />
        <button
          type="submit"
          className="bg-gray-400 text-gray-900 font-bold rounded h-12"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
}
