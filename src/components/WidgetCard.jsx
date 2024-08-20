import React from "react";

const WidgetCard = ({ categoryId, widget, deleteWidget }) => {
  return (
    <div className="widget_card">
      <div className="widget_card_btn_container">
      <h4>{widget.name}</h4>
      <button title="Remove Widget" className="cancel_btn" onClick={() => deleteWidget(categoryId, widget.id)}>⚒️</button>
      </div>
      
     
      <p>{widget.text}</p>
    </div>
  );
};

export default WidgetCard;
