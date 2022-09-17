import React from "react";
import { Formik } from "formik";
import Input from "../../components/forms/input";
import Button from "../../components/button";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import Textarea from "../../components/forms/textarea";
import Title from "../../components/title";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Card className="home-card">
        <Title text="Tambah Artikel" />
        <Formik
          initialValues={{ judul: "", konten: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.judul) {
              errors.judul = "Wajib diisi";
            }
            if (!values.konten) {
              errors.konten = "Wajib diisi";
            } else if (values.konten.length > 255) {
              errors.konten = "Maksimal karakter adalah 255!";
            }
            return errors;
          }}
          onSubmit={(values) => {
            let konten = location.state ?? [];
            konten.push({
              judul: values.judul,
              konten: values.konten,
              upvote: 0,
              downvote: 0,
              index: location?.state === null ? 0 : location.state.length,
            });
            konten.sort((a, b) => parseFloat(b.upvote) - parseFloat(a.upvote));

            navigate("/", {
              state: konten,
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                className="form-control mt-3"
                name="judul"
                placeholder="Masukkan judul"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.judul}
              />
              <span className="text-red">
                {errors.judul && touched.judul && errors.judul}
              </span>
              <Textarea
                name="konten"
                className="form-control mt-3"
                minRows={10}
                placeholder="Masukkan konten"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.konten}
              />
              <span className="text-red">
                {errors.konten && touched.konten && errors.konten}
              </span>
              <div
                style={{
                  display: "grid",
                  gridGap: 20,
                  justifyContent: "end",
                  alignItems: "center",
                  gridAutoFlow: "column",
                  marginTop: "20px",
                }}
              >
                <Button
                  title="Batal"
                  type="button"
                  color="danger"
                  onClick={() =>
                    navigate("/", {
                      state: location?.state,
                    })
                  }
                />
                <Button title="Kirim" type="submit" color="primary" />
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Add;
