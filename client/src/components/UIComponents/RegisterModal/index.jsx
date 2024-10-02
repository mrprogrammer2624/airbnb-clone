import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { ABButton, ABHeading, ABInput, ABModal } from "@/components";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      registerModal.onClose();
    } catch (error) {
      toast.error("error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ABHeading title="Welcome to Airbnb" subtitle="Create an account!" />
      <ABInput
        id="email"
        type="email"
        placeholder="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <ABInput
        id="name"
        placeholder="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <ABInput
        type="password"
        id="password"
        placeholder="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <ABButton outline icon={FcGoogle}>
        Continue with Google
      </ABButton>
      <ABButton outline icon={AiFillGithub}>
        Continue with GitHub
      </ABButton>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ABModal
      body={bodyContent}
      footer={footerContent}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLable="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};
