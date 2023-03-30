import "./styles.css";
import Input from "./Input";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import RadioGroup from "./RadioGroup";
import Switch from "./Switch";

export default function App() {
  return (
    <div className="App">
      <Input label="First Name" type="text" />
      <Input label="Last Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />

      <RadioGroup groupName="status" values={["Professor", "Student", "TA"]} />
      <CheckBox label="Subscribe" />

      <h4> Receive Phone Notifications </h4>
      <Switch />
      <segControl />
    </div>
  );
}
