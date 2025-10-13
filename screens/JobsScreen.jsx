import { useEffect, useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function JobsScreen({ route, navigation }) {
  const { jobCategory } = route.params;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?category=${jobCategory}`)
      .then((res) => res.json())
      .then(setJobs)
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [jobCategory]);

  const applyOnWhatsApp = (job) => {
    const message = `Hi, I want to apply for ${job.title}`;
    const url = `https://wa.me/9082598306?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../assets/images/kaam25.png")}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>KAAM25</Text>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.replace("Register")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Job List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.categoryHeading}>
          {jobCategory} Jobs ({jobs.length})
        </Text>

        {jobs.map((job, idx) => (
          <View key={idx} style={styles.jobCard}>
            {job.image && (
              <Image source={{ uri: job.image }} style={styles.jobImage} />
            )}
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.jobDescription}>{job.description}</Text>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => applyOnWhatsApp(job)}
            >
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fffaf2",
  },

  // 🔹 Header Section
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#feeca4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
    borderRadius:50
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f00001",
  },
  logoutButton: {
    backgroundColor: "#f00001",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontWeight: "600",
  },

  // 🔹 Scroll & Card Section
  scrollContainer: {
    padding: 15,
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textTransform: "capitalize",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  jobImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f00001",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 15,
    color: "#333",
    marginBottom: 12,
  },

  // 🔹 Apply Button
  applyButton: {
    backgroundColor: "#f00001",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
