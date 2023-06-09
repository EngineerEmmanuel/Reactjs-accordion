
import { useState } from "react";
import data from "./AccordionData";

const AccordionBody = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
  };

  return (
    <section>
      <div className="accordion-flex-con">
        <div className="accordions">
          {data.map((accord) => {
            const isAccordionOpen = accord.id === openAccordionId;

            return (
              <div className="accordion-con" key={accord.id}>
                <div className="accordion-para-btn-con">
                  <p>{accord.question}</p>
                  <button onClick={() => handleAccordionClick(accord.id)}>
                    {isAccordionOpen ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </button>
                </div>
                {isAccordionOpen && <p>{accord.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionBody;
