// import { useState } from "react";
// import { AddButton } from "./ContactForm.styled";

// export default function Form(props) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleChange = (e) => {
//     switch (e.target.name) {
//       case "name":
//         setName(e.target.value);
//         break;
//       case "number":
//         setNumber(e.target.value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.onSubmit({ name, number });
//     setName("");
//     setNumber("");
//   };

//   const disabledButton = () => {
//     if (!props.onValidate(name)) {
//       alert(`${name} is already in contacts`);
//       setName("");
//       setNumber("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} onChange={disabledButton}>
//       <label>
//         name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </label>
//       <AddButton type="submit"> Add contact </AddButton>
//     </form>
//   );
// }