import React, { useState } from 'react'
import './FormValidation.css'



const initialState = {
    username: '',
    email:'',
    mothername:'',
    fathername:'',
    date:'',
    time:'',
    gender:'',
    password:'',
    confirmPassword:'',
};

const Gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: ' Female'},
    {id: 3, name: 'Custom'},
];





const FormValidation = () =>{
   const [formData, setFormData] = useState(initialState);

   // destructuring the initialState
   const {username, email, date, fathername, mothername, gender, time, password, confirmPassword } = formData;

   const [errors, setErrors] = useState({});

   const validateForm = () =>{
    let newErrors = {};

    // Validate username

    if (!username) {
        newErrors.username = 'Username is required';

    }

    if (!fathername) {
        newErrors.fathername = "Father's name is required";

    }
    if (!mothername) {
        newErrors.mothername = "Mother's name is required";
        
    }
    if (!date) {
        newErrors.date = "Date is required";
        
    }
    if (!time) {
        newErrors.time = "Time is required";
        
    }
    if (!gender) {
        newErrors.gender = "gender is required";
        
    }

    // validate email
    if (!email) {
        newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid'
        
    }
        
    // Validate password
    if (!password) {
        newErrors.password = 'Password is required';

    }else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
    }

    // validate confirm password
    if (!confirmPassword) {
        newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
        newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors);

    // return true if there are no errors 
    return Object.keys(newErrors).length === 0;
    
   };

   const handleSubmit =(e) => {
    e.preventDefault();
    if (validateForm()) {
        // perform form submission
        setFormData(initialState);
    }
   };

   const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
   }

   






  return (
    <div className='div'>
      <form className='form' onSubmit={handleSubmit}>
        
    <h2>Form Validation</h2>

    <div className='Form-group'>
        <label>Username:</label>
        <input 
        type="text" 
        name='username'
        value={username}
        onChange={handleChange}
        
        
        />
        {errors.username && <span className='error'>{errors.username}</span>}
    </div>

    <div className='form-group'>
        <label>Mother's Name:</label>
        <input 
        type="text" 
        name='mothername'
        value={mothername}
        onChange={handleChange}
        
        />
        {errors.mothername && <span className='error'>{errors.mothername}</span>}
    </div>

    <div className='form-group'>
        <label>Father's Name:</label>
        <input 
        type="text" 
        name='fathername'
        value={fathername}
        onChange={handleChange}
        
        />
        {errors.fathername && <span className='error'>{errors.fathername}</span>}
    </div>

    <div className='form-group'>
        <label>Date</label>
        <input 
        type="date" 
        name='date'
        value={date}
        onChange={handleChange}
        
        />
        {errors.date && <span className='error'>{errors.date}</span>}
    </div>

    <div className='form-group'>
        <label>Time</label>
        <input 
        type="time" 
        name='time'
        value={time}
        onChange={handleChange}
        
        />
        {errors.time && <span className='error'>{errors.time}</span>}
    </div>

     <div className='form-group'>
        <select name="gender" value={gender} onChange={handleChange}>
            <option value="" disabled>--- choose Gender ---</option>
            {Gender.map((e)=>{
                return (
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                )
            })}
        </select>
    <div>
        {errors.gender && <span className='error'>{errors.gender}</span>}
    </div>
    </div> 

    <div className='form-group'>
        <label>Email:</label>
        <input 
        type="email" 
        name='email'
        value={email}
        onChange={handleChange}
        
        />
        {errors.email && <span className='error'>{errors.email}</span>}
    </div>

    <div className='form-group'>
        <label>Password</label>
        <input 
        type="password" 
        name='password'
        value={password}
        onChange={handleChange}
        
        />
        {errors.password && <span className='error'>{errors.password}</span>}
    </div>

    <div className='form-group'>
        <label>Confirm Password</label>
        <input 
        type="password" 
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        
        />
        {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
    </div>


    <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default FormValidation
