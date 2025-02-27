import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setFormData,
  FormStateItem,
} from "features/Forma/model/redux/reducers/formSlice";

export function useFormHandler() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormStateItem>({
    shouldFocusError: false,
    defaultValues: {
      selectField: null,
    },
  });

  const onSubmit: SubmitHandler<FormStateItem> = async (data) => {
    dispatch(setFormData(data));
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setLoading(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    isSubmitted,
    errors,
  };
}
