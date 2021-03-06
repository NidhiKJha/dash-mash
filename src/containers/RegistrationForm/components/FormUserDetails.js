import React from "react";
import "./style.css";

class FormPersonalDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
    this.continue = this.continue.bind(this);
  }

  continue(e) {
    e.preventDefault();
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};

      fields["contactperson"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["address"] = "";
      // fields["bankname"] = "";
      // fields["bankbranch"] = "";
      // fields["bankifsc"] = "";
      // fields["bankaccountno"] = "";
      // fields["pancard"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";

      this.setState({ fields: fields });
      // alert("Form submitted. You can now login as a user");
      this.props.nextStep();
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["contactperson"]) {
      formIsValid = false;
      errors["contactperson"] = "*Please enter your contactperson.";
    }

    if (typeof fields["contactperson"] !== "undefined") {
      if (!fields["contactperson"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["contactperson"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    // if (!fields["address"]) {
    //   formIsValid = false;
    //   errors["address"] = "*Please enter your address.";
    // }

    // if (typeof fields["address"] !== "undefined") {
    //   if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["address"] = "*Please enter alphabet characters only.";
    //   }
    // }

    // if (!fields["passwo"]) {
    //   formIsValid = false;
    //   errors["bankname"] = "*Please enter your bankname";
    // }

    // if (typeof fields["bankname"] !== "undefined") {
    //   if (!fields["bankname"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["bankname"] = "*Please enter alphabet characters only.";
    //   }
    // }

    // if (!fields["bankifsc"]) {
    //   formIsValid = false;
    //   errors["bankifsc"] = "*Please enter your bankifsc";
    // }

    // if (typeof fields["bankifsc"] !== "undefined") {
    //   if (!fields["bankifsc"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["bankifsc"] = "*Please enter alphabet characters only.";
    //   }
    // }

    // if (!fields["bankaccountno"]) {
    //   formIsValid = false;
    //   errors["bankaccountno"] = "*Please enter your bankaccountno";
    // }

    // if (typeof fields["bankaccountno"] !== "undefined") {
    //   if (!fields["bankaccountno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["bankaccountno"] = "*Please enter bank account number only.";
    //   }
    // }

    // if (!fields["pancard"]) {
    //   formIsValid = false;
    //   errors["pancard"] = "*Please enter your email-ID.";
    // }

    // if (typeof fields["pancard"] !== "undefined") {
    //   //regular expression for email validation
    //   var pattern = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
    //   if (!pattern.test(fields["pancard"])) {
    //     formIsValid = false;
    //     errors["pancard"] = "*Please enter valid pancard";
    //   }
    // }

    // if (!fields["officeadress"]) {
    //   formIsValid = false;
    //   errors["officeadress"] = "*officeadress";
    // }

    // if (typeof fields["officeadress"] !== "undefined") {
    //   //regular expression for email validation
    //   var pattern = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
    //   if (!pattern.test(fields["officeadress"])) {
    //     formIsValid = false;
    //     errors["officeadress"] = "*Please enter valid address.";
    //   }
    // }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    // if (!fields["confirm password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please confirm your password.";
    // }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please choose a strong password with more than 7 characters";
    //   }
    // }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
          <div class="form__form-group">
          <span class="form__form-group-label">Name </span>
            <input
              type="text"
              name="contactperson"
              value={this.state.fields.contactperson}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.contactperson}</div>{" "}
            </div>
            <div class="form__form-group">
            <span class="form__form-group-label">E-mail</span>
            <input
              type="text"
              name="emailid"
              value={this.state.fields.emailid}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            </div>
            <div class="form__form-group">
            <span class="form__form-group-label">Mobile Number</span>
            <input
              type="text"
              name="mobileno"
              value={this.state.fields.mobileno}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            </div>
            <div class="form__form-group">
            <span class="form__form-group-label">Address</span>
            <input
              type="text"
              name="address"
              value={this.state.fields.address}
              onChange={this.handleChange}
            />
            {/* <div className="errorMsg">{this.state.errors.address}</div>{" "} */}
            </div>
            {/* <label>Bank Name</label>
            <input
              type="text"
              name="bankname"
              value={this.state.fields.bankname}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.bankname}</div>{" "}
            <label>Bank branch</label>
            <input
              type="text"
              name="bankbranch"
              value={this.state.fields.bankbranch}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.bankbranch}</div>{" "}
            <label>Bank IFSC</label>
            <input
              type="text"
              name="bankifsc"
              value={this.state.fields.bankifsc}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.bankifsc}</div>
            <label>Bank Account No.</label>
            <input
              type="text"
              name="bankaccountno"
              value={this.state.fields.bankaccountno}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.bankaccountno}</div>
            <label>PAN No.</label>
            <input
              type="text"
              name="pancard"
              value={this.state.fields.pancard}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.pancard}</div> */}
            <div class="form__form-group"> <span class="form__form-group-label">Password</span>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}

            />
            <div className="errorMsg">{this.state.errors.password}</div>
            </div>
            {/* <div class="form__form-group">
            <span class="form__form-group-label">Confirm Password</span>
            <input
              type="confirmpassword"
              name="confirmpassword"
              value={this.state.fields.confirmpassword}
              onChange={this.handleChange}
            /></div> */}
            {/* 
            <div className="errorMsg">{this.state.errors.password}</div> */}
            <input type="submit" className="button" value="Continue" />
          </form>
        </div>
      </div>
    );
  }
}
export default FormPersonalDetails;
