import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="date" {...props} />
    </div>
  );
};

export default DateInput;
