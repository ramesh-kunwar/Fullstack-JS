import React, { useRef, useState } from "react";

const Form = () => {
  const teachingSkills = useRef(null);
  const communicationSkills = useRef(null);
  const resourcesProvided = useRef(null);

  const [totalRating, setTotalRating] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    let result = (
      (parseFloat(teachingSkills.current.value) +
        parseFloat(communicationSkills.current.value) +
        parseFloat(resourcesProvided.current.value)) /
      3
    ).toFixed(2);

    setTotalRating(result);
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="form-result my-5">
        <h1>
          Average Rating{" "}
          <span className="badge bg-danger"> {totalRating} </span>
        </h1>
      </div>

      <div className="mb-3">
        <label htmlFor="teaching-skills">Teaching Skills</label>
        <input type="number" className="form-control" ref={teachingSkills} />
      </div>
      <div className="mb-3">
        <label htmlFor="communication-skills">Communication Skills</label>
        <input
          type="number"
          className="form-control"
          ref={communicationSkills}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="resources-provided">Resources Provided </label>
        <input type="number" className="form-control" ref={resourcesProvided} />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
