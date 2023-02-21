import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Registration.scss";

type MyFormValues = {
  name: string;
  lastName: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
  telephone: number | null;
  year: number | string;
  gender: string;
  country: string;
  town: string;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Passwords do not match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export const Registration: FC = () => {
  const [changeColor1, setChangeColor1] = useState(true);
  const [changeColor2, setChangeColor2] = useState(false);
  const [show, setShow] = useState(true);
  const colorButton1 = () => {
    if (!changeColor1) {
      setChangeColor1(!changeColor1);
      setChangeColor2(!changeColor2);
    }
  };

  const colorButton2 = () => {
    if (!changeColor2) {
      setChangeColor1(!changeColor1);
      setChangeColor2(!changeColor2);
    }
  };

  const showPassword = () => {
    setShow((current) => !current);
  };

  const languageOptions = [
    {
      label: "Chinese",
      value: "zh-CN",
    },
    {
      label: "English (US)",
      value: "en-US",
    },
    {
      label: "English (GB)",
      value: "en-GB",
    },
    {
      label: "French",
      value: "fr-FR",
    },
    {
      label: "Spanish",
      value: "es-ES",
    },
  ];

  const initialValues: MyFormValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: null,
    year: "",
    gender: "",
    country: "",
    town: "",
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
            <button
              className={changeColor1 ? "colorActive" : ""}
              onClick={colorButton1}
            >
              Անհատ
            </button>
            <button
              className={changeColor2 ? "colorActive" : ""}
              onClick={colorButton2}
            >
              Կազմակերպություն
            </button>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
            validationSchema={SignupSchema}
          >
            {({ errors, touched }) => (
              <Form>
                {changeColor1 ? (
                  <div>
                    <div className="name">
                      <Field name="name" id="name" placeholder="Անուն *" />
                      {errors.name && touched.name ? (
                        <div className="error">{errors.name}</div>
                      ) : null}
                    </div>
                    <div className="lastName">
                      <Field
                        id="lastName"
                        name="lastName"
                        placeholder="Ազգանուն"
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="error">{errors.lastName}</div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="name">
                      <Field
                        name="name"
                        id="name"
                        placeholder="Կազմակերպության անվանում *"
                      />
                      {errors.name && touched.name ? (
                        <div className="error">{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="name" />
                    </div>
                    <div className="lastName">
                      <Field
                        id="lastName"
                        name="lastName"
                        placeholder="էջը կառավարողի անունը"
                      />
                    </div>
                  </div>
                )}

                <div className="email">
                  <Field id="email" name="email" placeholder="Էլ․ փոստ *" />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="password">
                  <Field
                    type={show ? "password" : "text"}
                    id="password"
                    name="password"
                    placeholder="Գաղտնաբառ *"
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                  {!show ? (
                    <svg
                      onClick={showPassword}
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5234 4.76953C13.1523 2.07812 10.4102 0.25 7.3125 0.25C4.18945 0.25 1.44727 2.07812 0.0761719 4.76953C0.0253906 4.87109 0 4.99805 0 5.125C0 5.27734 0.0253906 5.4043 0.0761719 5.50586C1.44727 8.19727 4.18945 10 7.3125 10C10.4102 10 13.1523 8.19727 14.5234 5.50586C14.5742 5.4043 14.5996 5.27734 14.5996 5.15039C14.5996 4.99805 14.5742 4.87109 14.5234 4.76953ZM7.3125 8.78125C5.28125 8.78125 3.65625 7.15625 3.65625 5.125C3.65625 3.11914 5.28125 1.46875 7.3125 1.46875C9.31836 1.46875 10.9688 3.11914 10.9688 5.125V5.15039C10.9688 7.15625 9.31836 8.80664 7.3125 8.80664V8.78125ZM7.3125 2.6875C7.08398 2.71289 6.85547 2.73828 6.65234 2.78906C6.80469 2.99219 6.88086 3.24609 6.88086 3.52539C6.88086 4.18555 6.34766 4.71875 5.6875 4.71875C5.4082 4.71875 5.1543 4.64258 4.95117 4.49023C4.90039 4.69336 4.875 4.92188 4.875 5.125C4.875 6.4707 5.9668 7.5625 7.3125 7.5625C8.6582 7.5625 9.75 6.4707 9.75 5.125C9.75 3.7793 8.6582 2.71289 7.3125 2.71289V2.6875Z"
                        fill="#626262"
                      />
                    </svg>
                  ) : null}

                  {show ? (
                    <svg
                      onClick={showPassword}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5234 6.76953C14.1523 4.07812 11.4102 2.25 8.3125 2.25C5.18945 2.25 2.44727 4.07812 1.07617 6.76953C1.02539 6.87109 1 6.99805 1 7.125C1 7.27734 1.02539 7.4043 1.07617 7.50586C2.44727 10.1973 5.18945 12 8.3125 12C11.4102 12 14.1523 10.1973 15.5234 7.50586C15.5742 7.4043 15.5996 7.27734 15.5996 7.15039C15.5996 6.99805 15.5742 6.87109 15.5234 6.76953ZM8.3125 10.7812C6.28125 10.7812 4.65625 9.15625 4.65625 7.125C4.65625 5.11914 6.28125 3.46875 8.3125 3.46875C10.3184 3.46875 11.9688 5.11914 11.9688 7.125V7.15039C11.9688 9.15625 10.3184 10.8066 8.3125 10.8066V10.7812ZM8.3125 4.6875C8.08398 4.71289 7.85547 4.73828 7.65234 4.78906C7.80469 4.99219 7.88086 5.24609 7.88086 5.52539C7.88086 6.18555 7.34766 6.71875 6.6875 6.71875C6.4082 6.71875 6.1543 6.64258 5.95117 6.49023C5.90039 6.69336 5.875 6.92188 5.875 7.125C5.875 8.4707 6.9668 9.5625 8.3125 9.5625C9.6582 9.5625 10.75 8.4707 10.75 7.125C10.75 5.7793 9.6582 4.71289 8.3125 4.71289V4.6875Z"
                        fill="#626262"
                      />
                      <path d="M15 1L2 14" stroke="white" />
                      <path d="M14 1L1 14" stroke="#626262" />
                    </svg>
                  ) : null}
                </div>
                <div className="confirmPassword">
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Կրկնեք գաղտնաաբառը*"
                  />

                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error">{errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="telephone">
                  {/* telephone name changed  temporary */}
                  <Field
                    type="number"
                    id="telephone"
                    name="telephone"
                    placeholder="+37477-12-34-56 *"
                  />
                  <svg
                    width={"18"}
                    height={"20"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>

                <div className="market">
                  <h3>Քանի տարի շուկայում</h3>
                  <div className="marketRadio">
                    <div>
                      <Field type="radio" name="year" value="Մինչև 1տ." />
                      <p>Մինչև 1տ.</p>
                    </div>
                    <div>
                      <Field type="radio" name="year" value="1-3տ." />
                      <p>1-3տ.</p>
                    </div>
                    <div>
                      <Field type="radio" name="year" value="3-5տ." />
                      <p>3-5տ.</p>
                    </div>
                    <div>
                      <Field type="radio" name="year" value="5 և ավել տ." />
                      <p>5 և ավել տ.</p>
                    </div>
                  </div>
                </div>
                <div className="market">
                  <h3>Սեռը</h3>
                  <div className="marketRadio">
                    <div>
                      <Field type="radio" name="person" value="Արական" />
                      <p>Արական</p>
                    </div>
                    <div>
                      <Field type="radio" name="person" value="Իգական" />
                      <p>Իգական</p>
                    </div>
                  </div>
                </div>

                <div className="country">
                  <Field as="select" name="country">
                    <option value="Armenia">Armenia</option>
                     <option value="Russia">Russia</option>
                    <option value="Georgia">Georgia</option>
                  </Field>
                </div>

                
                <div className="city">
                  <Field as="select" name="city">
                    <option value="Erevan">Erevan</option>
                     <option value="Moskva">Moskva</option>
                    <option value="Tbilisi">Tbilisi</option>
                  </Field>
                </div>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
