export default {
  formId: "smileForm",
  formField: {
    gender: {
      name: "gender",
      label: "1.How do you define your scalp type you...*",
      requiredErrorMsg: "Your scalp is required",
      type: "radio",
      data: [
        {
          value: "Drye",
          label: "Dry"
        },
        { value: "Oily", label: "Oily" },

        { value: "Normal", label: "Normal" }
      ]
    },
    age: {
      name: "age",
      label: "2.Define your hair texture:*",
      requiredErrorMsg: "Choose the appropriate age option",
      type: "radio",
      data: [
        { label: "Fine (Thin)", value: "Fine (Thin)" },
        { label: "Medium", value: "Medium" },
        { label: "Coarse (Thick)", value: "Coarse (Thick)" }
      ]
    },
    rate: {
      name: "rate",
      label: "3. How frequently do you wash your hair?*",
      requiredErrorMsg: "You should tell us about it",
      type: "radio",
      data: [
        { label: "Once a week", value: "Once a week" },
        { label: "2-3 times a week", value: "2-3 times a week" },
        { label: "Everyday", value: "Everyday" }
      ]
    },

    symptomCategory: {
      name: "symptomCategory",
      label: "4.Define your hair type:*",
      requiredErrorMsg: "Select at least one field",
      type: "checkbox",
      data: [
        { id: "symptom0", name: "Straight", checked: false },
        { id: "symptom1", name: "Wavy", checked: false },
        { id: "symptom2", name: "Curly", checked: false },
        { id: "symptom3", name: "Coils", checked: false }
      ]
    },
    symptomDetail: {
      name: "symptomDetail",
      label: "5. 5.How much hair do you lose everyday:",
      requiredErrorMsg: "Select at least one field",
      type: "radio",
      data: [
        { label: "A few strands", value: "A few strands" },
        { label: "A dozen strands", value: "A dozen strands" },
        {
          label: "More than a dozen strands",
          value: "More than a dozen strands"
        }
      ]
    },
    reasonCategory: {
      name: "reasonCategory",
      label: "6. 6.How do you describe the oiliness of your scalp?*",
      requiredErrorMsg: "Select at least one field",
      type: "radio",
      conditionalValue: "reason3",
      data: [
        { id: "reason0", name: "Dry", checked: false },
        {
          id: "reason1",
          name: "Oily",
          checked: false
        },
        { id: "reason2", name: "Balanced", checked: false },
        { id: "reason3", name: "Vey oily", checked: false }
      ]
    },
    reasonDetail: {
      name: "reasonDetail",
      label: "7. 7.How often do you experience itchiness in your scalp?*",
      requiredErrorMsg: "Provide a reason or problem whit your teeth",
      type: "radio",
      data: [
        { label: "Never", value: "Never" },
        { label: "Rarely", value: "Rarely" },
        { label: "Quite often", value: "Quite often" },
        { label: "Everyday", value: "Everyday" }
      ]
    },
    image: {
      name: "image",
      label: "8.Do you have any of the following conditions:",
      requiredErrorMsg: "Image is Required",
      type: "radio",
      data: [
        { label: "Dandruff", value: "Dandruff" },
        { label: "Scalp psoriasis", value: "Scalp psoriasis" },
        { label: "Seborrheic dermatitis", value: "Seborrheic dermatitis" },
        { label: "None of the above", value: "None of the above" }
      ]
    },
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
      type: "text"
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
      type: "text"
    },
    email: {
      name: "email",
      label: "Email address*",
      requiredErrorMsg: "Email address is required",
      type: "text"
    },
    phone: {
      name: "phone",
      label: "Phone number*",
      requiredErrorMsg: "Phone number name is required",
      type: "text"
    },

    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
      type: "text"
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
      type: "text"
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
      type: "select"
    },
    state: {
      name: "state",
      label: "State/Province/Region",
      type: "text"
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode*",
      requiredErrorMsg: "Zipcode is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 70000)",
      type: "text"
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
      type: "select"
    },
    useAddressForPaymentDetails: {
      name: "useAddressForPaymentDetails",
      label: "Use this address for payment details",
      type: "text"
    }
    // nameOnCard: {
    //   name: "nameOnCard",
    //   label: "Name on card*",
    //   requiredErrorMsg: "Name on card is required",
    // },
    // cardNumber: {
    //   name: "cardNumber",
    //   label: "Card number*",
    //   requiredErrorMsg: "Card number is required",
    //   invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)",
    // },
    // expiryDate: {
    //   name: "expiryDate",
    //   label: "Expiry date*",
    //   requiredErrorMsg: "Expiry date is required",
    //   invalidErrorMsg: "Expiry date is not valid",
    // },
    // cvv: {
    //   name: "cvv",
    //   label: "CVV*",
    //   requiredErrorMsg: "CVV is required",
    //   invalidErrorMsg: "CVV is invalid (e.g. 357)",
    // },
  }
};
