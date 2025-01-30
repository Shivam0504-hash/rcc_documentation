# Components

# Custom Text Input 



### Features 

- **Customizable Styles**: Easy to style with custom containers and input fields.
- **Error Handling**: Displays error messages with customized styling.
- **Password Field**: Option to hide or show password input using an eye icon.
- **Icons**: Supports both left and right icons.
- **Required Field**: Supports indicating required fields.
- **Focus & Blur Handling**: Dynamic styling on focus and blur.
- **Text Alignment**: Option to align text at the top or center of the input field.

## Props 

The `CustomInput` component accepts the following props:

| **Prop**         | **Type**      | **Default** | **Description**                                                                                        |
| ---------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `label`          | `string`      | `undefined` | A label that appears above the input field.                                                            |
| `error`          | `string`      | `undefined` | Error message that displays below the input when an error occurs.                                      |
| `rightIcon`      | `JSX.Element` | `undefined` | A custom icon component to display on the right side of the input field.                               |
| `leftIcon`       | `JSX.Element` | `undefined` | A custom icon component to display on the left side of the input field.                                |
| `disabled`       | `boolean`     | `false`     | Disables the input field if set to true.                                                               |
| `password`       | `boolean`     | `false`     | If true, the input will be treated as a password field, and a visibility toggle icon will be shown.    |
| `rightText`      | `JSX.Element` | `undefined` | Text displayed on the right side of the input, commonly used for labels like "Required" or "optional". |
| `textTop`        | `boolean`     | `false`     | Aligns the text to the top of the input field if true, otherwise, the text is aligned to the center.   |
| `required`       | `boolean`     | `false`     | Marks the field as required, adding a small asterisk to the label.                                     |
| `containerStyle` | `object`      | `undefined` | Custom styles for the outer container of the input field.                                              |
| `textInputStyle` | `object`      | `undefined` | Custom styles for the actual input element.                                                            |
| `onFocus`        | `function`    | `() => {}`  | Callback function that is called when the input gains focus.                                           |
| `onBlur`         | `function`    | `() => {}`  | Callback function that is called when the input loses focus.                                           |

---

### Use the `TextInput` component in your app

```javascript
<CustomInput
  label="EMAIL ADDRESS"
  returnKeyType="done"
  value={email}
  inputMode="email"
  autoFocus={true}
  error={emailError}
  onEndEditing={() => {}}
  onChangeText={(text) => {
    setEmail(text);
    setEmailError("");
  }}
  placeholder="Eg: me@gmail.com"
  onSubmitEditing={handleOnSubmit}
/>
```

## Some Code Examples

Here are a few code snippets that demonstrate how to use some of the key features of TeaxtInput:

### Creating a basic TextInput with default settings:

```javascript
import React, { useState } from "react";
import CustomInput from "@components/general/textInput/index";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
   <CustomInput
          label="EMAIL ADDRESS"
          returnKeyType="done"
          value={email}
          inputMode="email"
          autoFocus={true}
          error={emailError}
          onEndEditing={() => {}}
          onChangeText={text => {
            setEmail(text);
            setEmailError('');
          }}
          placeholder="Eg: me@gmail.com"
          onSubmitEditing={handleOnSubmit}
        />
  );
};

export default App;
```
## Customized TextInput Examples
``` javascript
<CustomInput
          label="EMAIL ADDRESS"
          returnKeyType="done"
          value={email}
          inputMode="email"
          autoFocus={true}
          error={emailError}
          onEndEditing={() => {}}
          onChangeText={text => {
            setEmail(text);
            setEmailError('');
          }}
          placeholder="Eg: me@gmail.com"
          onSubmitEditing={handleOnSubmit}
        />
```
<img src="/assets/textinput.png" height="200" width="800"/>

## Customized TextInput with Error
``` javascript
<CustomInput
          label="ENTER PASSWORD"
          returnKeyType="done"
          placeholder="8-20 Characters"
          value={password}
          autoFocus={true}
          error={passwordError}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
          onSubmitEditing={handleOnSubmit}
          password
        />
```
<img src="/assets/textinputerror.png" height="200" width="800" />



# Custom Button 🖲️


### Features 

- **Customizable Styles**: Easily customize button styles through props.
- **Loading State**: Displays a loading indicator when `loading` prop is `true`.
- **Disabled State**: Disables the button when `disabled` prop is `true`.
- **Text Customization**: Supports custom text styling with `titlestyle`.
- **Text Underline**: Option to add an underline to the button's text.
- **Text-Only Button**: Supports a text-only button style when `hastext` is `true`.
- **Custom OnPress**: Pass a custom `onPress` function to handle button presses.

## Props 

The `CustomButton` component accepts the following props:

| **Prop**          | **Type**       | **Default**  | **Description**                                                                                                 |
| ----------------- | -------------- | ------------ | --------------------------------------------------------------------------------------------------------------- |
| `title`           | `string`       | `undefined`  | The text to display on the button.                                                                               |
| `loading`         | `boolean`      | `false`      | If `true`, displays a loading indicator inside the button.                                                       |
| `disabled`        | `boolean`      | `false`      | Disables the button if `true`.                                                                                   |
| `onPress`         | `function`     | `undefined`  | Callback function that is called when the button is pressed.                                                     |
| `hastext`         | `boolean`      | `false`      | If `true`, renders a text-only button instead of the default button style.                                        |
| `style`           | `object`       | `undefined`  | Custom styles for the button container.                                                                          |
| `titlestyle`      | `object`       | `undefined`  | Custom styles for the text displayed inside the button.                                                          |
| `underline`       | `boolean`      | `false`      | If `true`, adds an underline to the button text.                                                                  |
| `children`        | `ReactNode`    | `undefined`  | Additional content to render inside the button (optional).                                                       |

---

### Usage of `CustomButton` in your app

Here is an example of how to use the `CustomButton` component in your React Native app:

```javascript
import React, { useState } from "react";
import CustomButton from "@components/general/button"; 

const App = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Button Pressed!");
    }, 2000); 
  };

  return (
    <CustomButton
      title="Submit"
      loading={loading}
      onPress={handlePress}
      style={{ marginTop: 20 }}
      titlestyle={{ color: "white" }}
    />
  );
};

export default App;
```
### Text-Only Button Example

Here’s an example of using the button with only text (no background):

```javascript
<CustomButton
  title="Click Me"
  hastext={true}
  onPress={() => alert("Text Button Pressed")}
  titlestyle={{ color: "blue" }}
/>
```
<img src="/assets/buttontext.png" height="150" width="800" />

### Customized Button with Underline

You can also apply an underline to the button text by setting the `underline` prop to `true`:

```javascript
<CustomButton
  title="Learn More"
  hastext={true}
  underline={true}
  onPress={() => alert("Text Button with Underline Pressed")}
  titlestyle={{ color: "green" }}
/>
```
<img src="/assets/button.png" height="150" width="800" />

### Loading State Button

If you want to show a loading spinner inside the button, you can set the `loading` prop to `true`:

```javascript
<CustomButton
  title="Loading..."
  loading={true}
  onPress={() => {}}
  style={{ marginTop: 20 }}
/>
```

<img src="/assets/buttonloading.png" height="150" width="800" />


# Custom Radio Button 

### Features 

- **Multiple Options**: Display multiple radio button options for selection.
- **Error Handling**: Show error messages when validation fails.
- **Customizable Styles**: Customize the radio button container, text, and label styles through props.
- **Text Styling**: Supports custom text styling for radio button labels using the `textstyle` prop.
- **Pre-selected Option**: Set a pre-selected option via the `selected` prop.
- **Custom OnSelect Handler**: Define a custom behavior when an option is selected using the `onSelect` prop.

## Props 

The `CustomRadioInput` component accepts the following props:

| **Prop**           | **Type**           | **Default**   | **Description**                                                                                                 |
| ------------------ | ------------------ | ------------- | --------------------------------------------------------------------------------------------------------------- |
| `label`            | `string`           | `undefined`   | The label text to display above the radio buttons.                                                               |
| `error`            | `string`           | `undefined`   | Error message to display below the radio buttons (optional).                                                      |
| `options`          | `string[]`         | `undefined`   | Array of strings representing the radio button options.                                                          |
| `selected`         | `string`           | `undefined`   | The currently selected option.                                                                                   |
| `onSelect`         | `function`         | `undefined`   | Callback function that is called when an option is selected.                                                     |
| `textstyle`        | `TextStyle | TextStyle[]` | `undefined` | Custom styles to apply to the radio button labels (optional).                                                    |

---

### Usage of `CustomRadioInput` in your app

Here’s an example of how to use the `CustomRadioInput` component in your React Native app:

```javascript
import React, { useState } from "react";
import CustomRadioInput from "@components/general/CustomRadioInput"; // 

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <CustomRadioInput
      label="Choose an option"
      options={["Option 1", "Option 2", "Option 3"]}
      selected={selectedOption}
      onSelect={handleSelect}
      error="Please select an option"
      textstyle={{ color: "blue", fontSize: 16 }}
    />
  );
};

export default App;
```

### Custom Radio Button Example

Here’s an example of using the radio button component with multiple options:

```javascript
    <CustomRadioInput
      label="Select Payment Method"
      options={["Credit Card", "PayPal", "Google Pay"]}
      selected={selectedOption}
      onSelect={handleSelect}
    />
```
<img src="/assets/radiobutton.png" height="150" width="800" />

### Handling Errors

To display an error message below the radio buttons, you can pass an error message to the `error` prop:

```javascript
    <CustomRadioInput
      label="Select a Payment Method"
      options={["Credit Card", "PayPal", "Google Pay"]}
      selected={selectedOption}
      onSelect={handleSelect}
      error="Please select a valid payment method"
    />
```
<img src="/assets/radioerror.png" height="150" width="800" />

### Styling the Radio Button Text

You can customize the text style of the radio button options by passing a `textstyle` prop:

```javascript
    <CustomRadioInput
      label="Select a Fruit"
      options={["Apple", "Banana", "Orange"]}
      selected={selectedOption}
      onSelect={handleSelect}
      textstyle={{ color: "green", fontSize: 18 }}
```
<img src="/assets/radiostyle.png" height="150" width="800" />

# Custom Switch 


### Features 

- **Customizable Size**: Easily adjust the switch size through the `size` prop.
- **Active & Inactive Colors**: Customize the active and inactive track and thumb colors.
- **Custom Indicators**: Render custom indicators on the "On" and "Off" states using `renderOnIndicator` and `renderOffIndicator`.
- **Custom Thumb Icons**: Option to display custom icons for both active and inactive thumb states.
- **Disable State**: The switch can be disabled when `disabled` prop is `true`.
- **Callback on State Change**: Use the `onChange` prop to get the updated value when the switch state changes.

## Props 

The `CustomSwitch` component accepts the following props:

| **Prop**                   | **Type**       | **Default**      | **Description**                                                                                               |
| -------------------------- | -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `size`                     | `number`       | `25`             | The size of the switch (width and height of the switch track).                                                 |
| `value`                    | `boolean`      | `undefined`      | The current state of the switch (true for "On", false for "Off").                                              |
| `disabled`                 | `boolean`      | `false`          | If `true`, the switch is disabled.                                                                             |
| `onChange`                 | `function`     | `undefined`      | Callback function that is called when the switch is toggled.                                                   |
| `activeTrackColor`         | `string`       | `#4CAF50`        | The color of the track when the switch is in the "On" state.                                                   |
| `inactiveTrackColor`       | `string`       | `#D3D3D3`        | The color of the track when the switch is in the "Off" state.                                                  |
| `activeThumbColor`         | `string`       | `#FFFFFF`        | The color of the thumb when the switch is in the "On" state.                                                  |
| `inactiveThumbColor`       | `string`       | `#FFFFFF`        | The color of the thumb when the switch is in the "Off" state.                                                 |
| `renderOnIndicator`        | `function`     | `() => null`     | Custom rendering function for the "On" state indicator.                                                       |
| `renderOffIndicator`       | `function`     | `() => null`     | Custom rendering function for the "Off" state indicator.                                                      |
| `renderActiveThumbIcon`    | `function`     | `() => null`     | Custom rendering function for the active thumb icon.                                                          |
| `renderInactiveThumbIcon`  | `function`     | `() => null`     | Custom rendering function for the inactive thumb icon.                                                        |

---

### Usage of `CustomSwitch` in your app

Here is an example of how to use the `CustomSwitch` component in your React Native app:

```javascript
import React, { useState } from "react";
import CustomSwitch from "@components/general/CustomSwitch"; 

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleChange = (newValue) => {
    setIsEnabled(newValue);
  };

  return (
    <CustomSwitch
      size={30}
      value={isEnabled}
      onChange={handleChange}
      activeTrackColor="#4CAF50"
      inactiveTrackColor="#D3D3D3"
      activeThumbColor="#FFFFFF"
      inactiveThumbColor="#FFFFFF"
    />
  );
};

export default App;
```
### Custom Indicator Example

You can render a custom indicator for the "On" and "Off" states by passing custom components to the `renderOnIndicator` and `renderOffIndicator` props:

```javascript
<CustomSwitch
  size={30}
  value={isEnabled}
  onChange={handleChange}
  renderOnIndicator={() => <Text style={{ color: '#fff' }}>On</Text>}
  renderOffIndicator={() => <Text style={{ color: '#000' }}>Off</Text>}
/>
```
<img src="/assets/switch.png" height="150" width="800" />

### Custom Thumb Icon Example

You can also add custom thumb icons by using the `renderActiveThumbIcon` and `renderInactiveThumbIcon` props:

```javascript
<CustomSwitch
  size={30}
  value={isEnabled}
  onChange={handleChange}
  renderActiveThumbIcon={() => <Icon name="check" size={20} color="#4CAF50" />}
  renderInactiveThumbIcon={() => <Icon name="close" size={20} color="#D3D3D3" />}
/>
```
### Disabled Switch Example

To disable the switch, set the `disabled` prop to `true`:

```javascript
<CustomSwitch
  size={30}
  value={isEnabled}
  onChange={handleChange}
  disabled={true}
/>
```
<img src="/assets/swicthdisable.png" height="150" width="800" />

### Styling the Switch

You can customize the appearance of the switch by using the following props:

- **`activeTrackColor`**: The color of the track when the switch is in the "On" state.
- **`inactiveTrackColor`**: The color of the track when the switch is in the "Off" state.
- **`activeThumbColor`**: The color of the thumb when the switch is in the "On" state.
- **`inactiveThumbColor`**: The color of the thumb when the switch is in the "Off" state.

#### Example:

```javascript
<CustomSwitch
  size={30}
  value={isEnabled}
  onChange={handleChange}
  activeTrackColor="#FF5733"
  inactiveTrackColor="#D3D3D3"
  activeThumbColor="#FF6347"
  inactiveThumbColor="#A9A9A9"
/>
```
<img src="/assets/switchstyle.png" height="150" width="800" />
