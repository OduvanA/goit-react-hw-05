import { Formik, Form, Field } from "formik";


export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.searchBar);
    actions.resetForm();
  }

  return (
    <Formik initialValues={{searchBar: ""}} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="searchBar" />

      
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
}