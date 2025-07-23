import { useState } from "react";

const INITIAL_LABEL = "Copy css";

const Element = ({ classElement, text, category }) => {
  const [label, setLabel] = useState(INITIAL_LABEL);
  const [isHovered, setIsHovered] = useState(false);

  // Texto a copiar: className="..."
  const classFixed = `className="${classElement.trim()}"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(classFixed).then(() => setLabel("¡Copied!"));
    setTimeout(() => setLabel(INITIAL_LABEL), 1000);
  };

  // Props comunes para ambos casos
  const interactiveProps = {
    onClick: handleCopy,
    onMouseEnter: () => setLabel("Click to copy"),
    onMouseLeave: () => setLabel(INITIAL_LABEL),
    className: `relative ${classElement}`,
  };

  // Si text es "inputs", devolvemos un <input>, si no un <button>
  if (category === "Inputs") {
    return (
      <input
        {...interactiveProps}
        type="text"
        placeholder={label === INITIAL_LABEL ? "Nice to meet you!" : label}
        readOnly
      />
    );
  }

  return (
    <button
      {...interactiveProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? label : text}
    </button>
  );
};

export default Element;
