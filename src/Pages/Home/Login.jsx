import React from "react";
import { Navigate } from "react-router-dom";
import "./Homescreen/Login.css"

function Login() {
  return (
    <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Registration Form</h2>
    </div>
    <div class="row clearfix">
      <div class="">
        <form>
          <div class="row clearfix">
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="mobile" name="mobile" placeholder="Mobile Number with country code" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input type="whatsapp" name="whatsapp" placeholder="Whatsapp Number with country code" required />
          </div>          
          <div class="col_half">
            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
              <div class="input_field radio_option">              
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
              </div>  
            </div>
          </div>
              <div class="input_field radio_option">              
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Student</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Tutor</label>
              </div>
              <div class="input_field select_option">
              <select>
                  <option>Select a Subject</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Maths</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Computer science</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <div class="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>India</option>
                  <option>UK</option>
                  <option>US</option>
                  <option>Australia</option>
                </select>
                <div class="select_arrow"></div>
              </div>
            <div class="input_field checkbox_option">
              <input type="checkbox" id="cb1"/>
              <label for="cb1">I agree with terms and conditions</label>
            </div>
          <input class="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;