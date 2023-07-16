import React, { useCallback, useState } from "react";

const RenderInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleInput = useCallback((e) => {
    const { value } = e.target;
    if (value.length <= 20) {
      setValue(value);
    }
  }, []);
  const handleCharactar_validation = useCallback((data) => {
    let allow = true;
    let value_array = data.split("");
    console.log(
      value_array.some((e) => e === String(e).toLowerCase()),
      "low"
    );
    console.log(
      value_array.some((e) => e === String(e).toUpperCase()),
      "cap"
    );
    console.log(
      value_array.some((e) => parseInt(e) === Number(e)),
      "int"
    );
    if (
      value_array.some((e) => e === String(e).toLowerCase()) &&
      value_array.some((e) => e === String(e).toUpperCase()) &&
      value_array.some((e) => parseInt(e) === Number(e))
    ) {
      allow = false;
    }
    return allow;
  }, []);

  const handleRepeatedstring = useCallback((data) => {
    let value_array = data.split("");
    let repeat_array = [];
    let allow = false;
    value_array.map((item, i) => {
      if (i !== 0) {
        if (value_array[i - 1] === item) {
          repeat_array.push(item);
          if (repeat_array.length === 2) {
            allow = true;
          }
        } else {
          if (!allow) {
            repeat_array = [];
          }
        }
      }
    });
    return allow;
  }, []);
  const handleFieldValidation = useCallback(
    (e) => {
      const { value } = e.target;
      let errorData = "";
      if (value.length) {
        if (value.length < 6) {
          errorData = `${6 - value.length} require characters`;
        } else if (handleCharactar_validation(value)) {
          errorData =
            "password should contains minimum  one capital and small characters and one intiger value";
        } else if (handleRepeatedstring(value)) {
          errorData = "weak Password";
        }
      }

      setError(errorData);
      console.log(errorData, "errorData");
    },
    [handleCharactar_validation, handleRepeatedstring]
  );
  return (
    <div className="passwordCls">
      <div className="paasContainer">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h4 style={{fontSize:'20px'}}>Welcome User</h4>
        </div>
        <br/>
        <div className="labelContainer">
          <label htmlFor="passwordInput">Password</label>
        </div>
        <input
          id="password"
          value={value}
          onChange={handleInput}
          onBlur={handleFieldValidation}
          placeholder="Enter Password"
        />
        <br />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              marginRight: "5%",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {error}
          </span>
        )}
        <div style={{ display: 'flex', justifyContent: 'center',marginTop:'100%' }}>
          <button className="saveButton">Save</button>
        </div>
      </div>
    </div>
  );
};

export default RenderInput;
