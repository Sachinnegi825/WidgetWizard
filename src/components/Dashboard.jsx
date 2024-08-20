import React, { useState, useEffect } from "react";
import { dashboardData } from "../constants/data";
import CategoryList from "./CategoryList";
import WidgetModal from "./WidgetModal";

function Dashboard() {
  const [categories, setCategories] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("dashboardData");
    if (storedData && storedData.length>0) {
      setCategories(JSON.parse(storedData));
    } else {
      setCategories(dashboardData?.categories);
    }
  }, []);

  useEffect(() => {
    if (categories) {
      localStorage.setItem("dashboardData", JSON.stringify(categories));
    }
  }, [categories]);

  const deleteWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const updateCategories = (updatedCategories) => {
    setCategories(updatedCategories);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!categories) return <div>Loading...</div>;

  return (
    <>
     <div className="top_header">
     <h1>CNAPP Dashboard</h1>
     <button onClick={openModal} className="add_btn">Add Widget +</button>
     </div>
     

      <CategoryList categories={categories} deleteWidget={deleteWidget} />

      {isModalOpen && (
        <WidgetModal
          categories={categories}
          updateCategories={updateCategories}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Dashboard;
