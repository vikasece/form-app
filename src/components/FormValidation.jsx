export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'name is required';
  } else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.name = 'User name is invalid';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      values.phone
    )
  ) {
    errors.phone = 'Please enter valid phone number';
  }
  return errors;
}
