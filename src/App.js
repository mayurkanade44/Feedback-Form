import smile from "./images/smile.png";
import bad from "./images/confused.png";
import ugly from "./images/sad.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  efficiency: "",
  work: "",
  behavior: "",
  equipment: "",
  improvement: "",
  aspect: "",
  reconsider: "",
};
const Feedback = () => {
  const [formValue, setFormValue] = useState(initialState);
  const form = useRef();
  const [thanks, setThanks] = useState(false);
  const {
    name,
    efficiency,
    work,
    behavior,
    equipment,
    improvement,
    aspect,
    reconsider,
  } = formValue;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setThanks(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormValue(initialState);
  };

  return (
    <div className="container my-2">
      {!thanks ? (
        <>
          <h2 className="text-center text-info mb-4">
            <u>Feedback Form</u>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="form-check"
            style={{ paddingLeft: 0 }}
            ref={form}
          >
            <div className="row">
              {/* <h6 className="text-center">Name of the client </h6>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  style={{ width: 400 }}
                />
              </div> */}
              <div className="d-flex justify-content-center name">
                <h6 className="col-form-label me-1">Client Name :-</h6>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr className="my-3" />
              <h6 className="text-center">Rate work efficiency?</h6>
              <div className="col-4 d-flex justify-content-center">
                <input
                  className="form-check-input mt-2"
                  type="radio"
                  name="efficiency"
                  value="Good"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <img src={smile} alt="good" width={30} />
                </label>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <input
                  className="form-check-input mt-2"
                  type="radio"
                  name="efficiency"
                  value="Average"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckChecked"
                >
                  <img src={bad} alt="bad" width={30} />
                </label>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <input
                  className="form-check-input mt-2"
                  type="radio"
                  name="efficiency"
                  value="Ugly"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckChecked"
                >
                  <img src={ugly} alt="ugly" width={30} />
                </label>
              </div>
              <hr className="my-3" />
              <h6 className="text-center">Did our executive know his work?</h6>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="work"
                  value="Yes"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>Yes</b>
                </label>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="work"
                  value="No"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b> No</b>
                </label>
              </div>
              <hr className="my-3" />
              <h6 className="text-center">
                Was our executive in proper safety and good behavior?
              </h6>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="behavior"
                  value="Yes"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>Yes</b>
                </label>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="behavior"
                  value="No"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>No</b>
                </label>
              </div>
              <hr className="my-3" />
              <h6 className="text-center">
                Did executive use proper non-leaking equipment?
              </h6>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="equipment"
                  value="Yes"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>Yes</b>
                </label>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="equipment"
                  value="No"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>No</b>
                </label>
              </div>
              <hr className="my-3" />
              <div className="col-md-5">
                <h6 className="text-center textarea">
                  Do you see a need to improve our service at site?
                </h6>
              </div>
              <div className="col-md-6">
                <textarea
                  className="form-control"
                  name="improvement"
                  value={improvement}
                  onChange={handleChange}
                  style={{ height: 75 }}
                ></textarea>
              </div>
              <hr className="my-3" />
              <div className="col-md-5">
                <h6 className="text-center textarea">
                  Would you like to share a good aspect of our service?
                </h6>
              </div>
              <div className="col-md-6">
                <textarea
                  className="form-control"
                  name="aspect"
                  value={aspect}
                  onChange={handleChange}
                  style={{ height: 75 }}
                ></textarea>
              </div>
              <hr className="my-3" />
              <h6 className="text-center">
                Would you recommend our services to an associate?
              </h6>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reconsider"
                  value="Yes"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>Yes</b>
                </label>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="reconsider"
                  value="No"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexCheckDefault"
                >
                  <b>No</b>
                </label>
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  value="Send"
                  disabled={
                    efficiency &&
                    work &&
                    behavior &&
                    equipment &&
                    aspect &&
                    improvement &&
                    reconsider &&
                    name
                      ? false
                      : true
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center" style={{ marginTop: 100 }}>
          <h2 className="text-success">
            Thank You For Your Valuable Feedback.
          </h2>
          <img className="mt-1" src={smile} alt="good" width={60} />
        </div>
      )}
    </div>
  );
};
export default Feedback;
