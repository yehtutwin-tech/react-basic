import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";
import { useState } from "react";

function AddUser({ addProfile }) {
  const [profile, setProfile] = useState(null);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const statusRef = useRef(null);

  const handleCLick = () => {
    addProfile(profile);
    setProfile(null);
    nameRef.current.value = '';
    ageRef.current.value = '';
    statusRef.current.checked = false;
    nameRef.current.focus();
  }

  const handleChange = (e) => {
    let value;
    if (e.target.name === 'isActive') {
      value = e.target.checked;
    }
    else if (e.target.name === 'age') {
      value = Number(e.target.value);
    }
    else {
      value = e.target.value;
    }

    setProfile({
      ...profile,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    nameRef.current.focus();
  }, [])

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const constainerStyles = {
    border: '1px solid #c0c0c0',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
  };

  const rowStyles = {
    margin: '10px 0',
  }

  const inputStyles = {
    padding: '5px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #c0c0c0',
  }

  const btnStyles = {
    padding: '10px 20px',
    backgroundColor: 'darkblue',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
  }

  return (
    <div style={constainerStyles}>
      <div style={rowStyles}>
        <input
          style={inputStyles}
          type="text" name="name" placeholder="Name..."
          onChange={handleChange}
          ref={nameRef}
        />
      </div>
      <div style={rowStyles}>
        <input
          style={inputStyles}
          type="text" name="age" placeholder="Age..."
          onChange={handleChange}
          ref={ageRef}
        />
      </div>
      <div style={rowStyles}>
        <input
          id="isActive"
          type="checkbox" name="isActive"
          onChange={handleChange}
          ref={statusRef}
        />
        <label htmlFor="isActive">Active</label>
      </div>
      <div style={rowStyles}>
        <button style={btnStyles} onClick={handleCLick}>Add</button>
      </div>
    </div>
  )
}

AddUser.propTypes = {
  addProfile: PropTypes.func,
}

export default AddUser;
