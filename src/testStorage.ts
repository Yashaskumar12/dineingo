// filepath: d:\project-bolt-sb1-7wuo3n57\Dineingo\src\testStorage.ts
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./firebase"; // Import the initialized Firebase app

const storage = getStorage(app);

const testUpload = async () => {
  const storageRef = ref(storage, "test-file.txt");
  const file = new Blob(["Hello, Firebase Storage!"], { type: "text/plain" });

  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Uploaded a file:", snapshot);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

testUpload();
