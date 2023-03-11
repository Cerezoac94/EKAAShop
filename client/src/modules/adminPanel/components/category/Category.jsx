import { Link } from "react-router-dom";

const Category = ({ category }) => {
  console.log("🚀 ~ file: Category.jsx:4 ~ Category ~ category:", category)
  return (
    <Link to={`edit/${category.id}`}>
      <li>{category.name}</li>
    </Link>
  );
};

export default Category;
