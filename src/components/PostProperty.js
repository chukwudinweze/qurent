import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const PostProperty = () => {
  const [property, setProperty] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(property);
    setProperty({});
  };
  return (
    <section className="post__property">
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </section>
  );
};

export default PostProperty;
