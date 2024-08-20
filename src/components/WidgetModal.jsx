import React, { useState, useEffect } from "react";
import { dashboardData } from "../constants/data";

const WidgetModal = ({ categories, updateCategories, closeModal }) => {
  const [selectedWidgets, setSelectedWidgets] = useState({});
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);

  useEffect(() => {
 
    const initialSelected = {};
    categories.forEach((category) => {
      initialSelected[category.id] = {};
      category.widgets.forEach((widget) => {
        initialSelected[category.id][widget.id] = true;
      });
    });
    setSelectedWidgets(initialSelected);
  }, [categories]);


  const handleCheckboxChange = (categoryId, widgetId) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [widgetId]: !prev[categoryId]?.[widgetId],
      },
    }));
  };

  const handleSubmit = () => {
    const updatedCategories = categories.map((category) => {
      const allWidgets = dashboardData.categories.find((cat) => cat.id === category.id).widgets;
      return {
        ...category,
        widgets: allWidgets.filter((widget) => selectedWidgets[category.id]?.[widget.id]),
      };
    });

    updateCategories(updatedCategories);
  };

 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal_head"><h2> Add Widget </h2><button className="cancel_btn" onClick={closeModal}>⚒️</button></div>
        <div className="category-tabs">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-tab ${category.id === activeCategory ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name.slice(0,5)}
            </div>
          ))}
        </div>
        <div className="widgets-container">
          {categories
            .find((category) => category.id === activeCategory)
            .widgets.map((widget) => (
              <div key={widget.id}>
                <input
                  type="checkbox"
                  checked={selectedWidgets[activeCategory]?.[widget.id] || false}
                  onChange={() => handleCheckboxChange(activeCategory, widget.id)}
                />
                <label>{widget.name}</label>
              </div>
            ))}
        </div>

        <div className="btn_container">
        <button onClick={closeModal}>Cancel</button>
        <button onClick={handleSubmit}>Confirm</button>
        </div>
       
       
      </div>
    </div>
  );
};

export default WidgetModal;
