import { useForm, type SubmitHandler } from "react-hook-form";

interface ItemForm {
  itemName: string;
  itemQuantity: number;
}

export const FormReact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemForm>();
  const onSubmit: SubmitHandler<ItemForm> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Item Name</label>
      <input
        defaultValue="duck"
        {...register("itemName", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label>Item quantity</label>
      <input
        type="number"
        {...register("itemQuantity", { required: true, min: 1 })}
      />
      {/* errors will return when field validation fails  */}
      {errors.itemName && <span>This field is required</span>}
      {errors.itemQuantity && <span>Wrong quantity</span>}

      <button type="submit">Place order</button>
    </form>
  );
};
