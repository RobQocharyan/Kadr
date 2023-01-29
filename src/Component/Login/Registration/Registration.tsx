import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Registration.scss";

type MyFormValues = {
  name: string;
  lastName:string;
  email:string;
  password:string | number;
  confirmPassword:string | number;
  telephone:number;
  year:number | string;
  gender:string;
  country:string;
  town:string
};

export const Registration: FC = () => {
  const initialValues: MyFormValues = {
    name:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    telephone:+374,
    year:"",
    gender:"",
    country:"",
    town:""
  };
  return (
    <div className="registration">
      <div className="registration__header">
        <Link to={"/home"}>
          <svg
            width="91"
            height="20"
            viewBox="0 0 91 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.5345 9.70743H81.4013C81.4013 8.33049 80.9572 7.12565 80.0691 6.0241C79.0443 4.75043 77.6779 4.1308 76.0041 4.1308H71.7342V0H75.8675C78.5319 0 80.7864 0.929458 82.6993 2.82275C84.6123 4.71603 85.5345 6.98798 85.5345 9.70743ZM75.9017 10.568V20H71.7684V10.568H75.9017ZM91 20L81.4013 10.6024H76.1749L85.7737 20H91ZM43.3821 14.5267L35.7988 0.550787L25.3803 20H29.9576L32.8953 14.5267H43.3821ZM19.7781 20L9.59872 10.568H4.37237L14.5518 20H19.7781ZM20.0856 0L9.59872 9.70743H4.37237L14.8593 0H20.0856ZM66.1663 10.4303C66.1663 15.9036 62.1697 20 58.2755 20H48.9159V15.8692H55.3378C58.8904 15.8692 61.7939 14.6988 61.7939 10.4303C61.7939 6.19621 58.8904 4.99139 55.3378 4.99139H48.9159V0.860586H58.2755C62.4088 0.860586 66.1663 4.95697 66.1663 10.4303ZM4.16742 10.6024V20H0V10.6024H4.16742Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <div className="registration__footer">
        <div className="footer__name">
          <h1>Ստեղծել անձնական էջ</h1>
          <h4>Ընտրեք ձեր հաշվի տեսակը</h4>
        </div>
        <div className="footer__persone">
          <div className="buttons">
            <button className="individual">Անհատ</button>
            <button className="organization:">Կազմակերպություն</button>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form>
                <div className="name">
                    <Field name="name" id="name" placeholder="Անուն *" />
                </div>
                <div className="lastName">
                    <Field id="lastName" name="lastName" placeholder="Ազգանուն *" />
                </div>
                <div className="email">
                    <Field id="email" name="email" placeholder="Էլ․ փոստ *" />
                </div>
                <div className="password">
                    <Field  type="password" id="password" name="password" placeholder="Գաղտնաբառ *" />
                </div>
                <div className="confirmPassword">
                    <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Կրկնեք գաղտնաաբառը*" />
                </div>
                <div className="telephone">
                    <Field type="number" id="telephone" name="telephone"   />
                </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
