import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { Button, Form, Input, Label } from "./ContactForm.styled";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const number = formData.get("number");

    dispatch(addContact({ name, number }));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" name="name" required />
      </Label>

      <Label>
        Number:
        <Input type="tel" name="number" required />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
