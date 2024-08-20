import React from "react";
import WidgetCard from "./WidgetCard";

const CategoryList = ({ categories, deleteWidget }) => {
    
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div className="widget_container">
            {category.widgets.map((widget) => (
              <WidgetCard
                key={widget.id}
                categoryId={category.id}
                widget={widget}
                deleteWidget={deleteWidget}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
