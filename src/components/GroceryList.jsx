import "./Grocery.css";

export const GroceryList = ({ title, status, id, handleDelete }) => {
  return (
    <div className="list">
      <p>{title}</p>
      <button onClick={() => handleDelete(id)} className="btn ">
        Delete
      </button>
    </div>
  );
};
