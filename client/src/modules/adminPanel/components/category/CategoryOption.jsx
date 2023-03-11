const CategoryOption = ({ category }) => {
  
  return (
    
      <>
        <option value={category.id}>{category.name}</option>
      </>
      
    
  );
};
export default CategoryOption;
