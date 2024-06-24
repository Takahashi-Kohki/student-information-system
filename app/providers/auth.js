import firebase from '../providers/firebase';

export const authUser = async (email, password, signUp = false) => {
  try {
    if (signUp) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } else {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw error;
  }
};