import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Image,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import COLORS from "../constants/colour";

export default function RegisterScreen({ navigation }) {
  const [input, setInput] = useState({
    username: "",
    email: "",
    mobile: "",
    gender: "",
    city: "",
    jobCategory: "",
  });

  const { t } = useTranslation();

  const handleChange = (field, val) => setInput({ ...input, [field]: val });

  const jobCategories = [
    "Driver",
    "Helper",
    "Cleaner",
    "Security",
    "Delivery",
    // "Gardener",
    // "Construction Worker",
    // "Warehouse Worker",
    // "Office Boy",
    // "Cook",
    // "Waiter",
    // "House Maid",
    // "Sweeper",
    // "Loader/Unloader",
    // "Painter",
    // "Plumber",
    // "Electrician",
    // "Car Washer",
    // "Peon",
    // "Farm Worker",
    // "Mechanic Helper",
  ];

  const handleSubmit = async () => {
    await axios.post("https://kaam-25-backend.onrender.com/register", input);
    navigation.replace("Jobs", { jobCategory: input.jobCategory });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/kaam25.png")}
          style={styles.logo}
        />
        <Text style={styles.titleText}>{t("KAAM25")}</Text>
      </View>

      {/* Form Card */}
      <View style={styles.formCard}>
        <TextInput
          placeholder={t("registration.username")}
          value={input.username}
          onChangeText={(v) => handleChange("username", v)}
          style={styles.inputField}
          placeholderTextColor={COLORS.placeholderText}
        />
        <TextInput
          placeholder={t("registration.email")}
          value={input.email}
          onChangeText={(v) => handleChange("email", v)}
          style={styles.inputField}
          placeholderTextColor={COLORS.placeholderText}
          keyboardType="email-address"
        />
        <TextInput
          placeholder={t("registration.mobile")}
          value={input.mobile}
          onChangeText={(v) => handleChange("mobile", v)}
          style={styles.inputField}
          placeholderTextColor={COLORS.placeholderText}
          keyboardType="phone-pad"
        />


        <Picker
          selectedValue={input.gender}
          onValueChange={(v) => handleChange("gender", v)}
          style={styles.pickerField}
          itemStyle={{ color: COLORS.textDark }}
        >
          <Picker.Item label={t("registration.gender")} value="" />
          <Picker.Item label={t("registration.male")} value="Male" />
          <Picker.Item label={t("registration.female")} value="Female" />
        </Picker>

        <TextInput
          placeholder={t("registration.city")}
          value={input.city}
          onChangeText={(v) => handleChange("city", v)}
          style={styles.inputField}
          placeholderTextColor={COLORS.placeholderText}
        />

        <Picker
          selectedValue={input.jobCategory}
          onValueChange={(v) => handleChange("jobCategory", v)}
          style={styles.pickerField}
          itemStyle={{ color: "#f00001" }}
        >
          <Picker.Item label={t("registration.jobCategory")} value="" />
          {jobCategories.map((job) => (
            <Picker.Item key={job} label={job} value={job} />
          ))}
        </Picker>

        <View style={styles.submitButton}>
          <Button
            title={t("submit")}
            onPress={handleSubmit}
            color={"#f00001"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f00001",
  },
  formCard: {
    backgroundColor: "#feeca4",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 6,
    marginLeft: 2,
  },
  inputField: {
    backgroundColor: "#fff",
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    color: COLORS.textDark,
  },
  pickerField: {
    backgroundColor: "#fff",
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    color: COLORS.textDark,
  },
  submitButton: {
    backgroundColor: "#f00001",
    borderRadius: 8,
    marginTop: 10,
  },
});
