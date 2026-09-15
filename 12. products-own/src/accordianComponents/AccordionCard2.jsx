import { GoPlus } from "react-icons/go";
const AccordionCard2 = ({ el, isOpen, handleOpen }) => {
  return (
    <div style={{ margin: "20px 0px" }} onClick={() => handleOpen(el.id)}>
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#2e2e2e",
          padding: "20px 10px",
          margin: "0px",
          color: "white",
        }}
      >
        <span>{el.question}</span> <GoPlus className={`transition ${isOpen == el.id && 'rotate-45'}`} />
      </h2>
      {isOpen == el.id && (
        <p
          style={{
            padding: "20px 10px",
            margin: "0px",
            backgroundColor: "#2e2e2e",
            color: "white",
          }}
        >
          {el.answer}
        </p>
      )}
    </div>
  );
};

export default AccordionCard2;
