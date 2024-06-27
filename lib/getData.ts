import firebase_app from "./firebase";
import { getFirestore, doc, getDoc, DocumentData, DocumentSnapshot } from "firebase/firestore";

// Get the Firestore instance
const db = getFirestore(firebase_app);

// Function to retrieve a document from a Firestore collection
export default async function getDocument(collection: string, id: string): Promise<{ result: DocumentSnapshot<DocumentData> | null, error: Error | null }> {
  // Create a document reference using the provided collection and ID
  const docRef = doc(db, collection, id);
  // Variable to store the result of the operation
  let result: DocumentSnapshot<DocumentData> | null = null;
  // Variable to store any error that occurs during the operation
  let error: Error | null = null;

  try {
    // Retrieve the document using the document reference
    result = await getDoc(docRef);
  } catch (e) {
    // Catch and store any error that occurs during the operation
    error = e as Error;
  }

  // Return the result and error as an object
  return { result, error };
}