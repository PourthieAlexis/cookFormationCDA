import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required("Ce champ est requis"),
  image: yup.string().required("Ce champ est requis"),
});

const AddRecipeForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        name="title"
        placeholder="Titre de la recette"
        {...register("title")}
      />
      {errors.title && <span>{errors.title.message}</span>}

      <input
        type="text"
        name="image"
        placeholder="URL de l'image"
        {...register("image")}
      />
      {errors.image && <span>{errors.image.message}</span>}

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddRecipeForm;
