// import {
//   Query,
//   push,
//   ref,
//   set,
//   get as getFirebaseData,
// } from "firebase/database";
// import { database } from "@/firebase";
// const getPost = async () => {
//   try {
//     const completedTasksRef: Query = ref(database, "posts");
//     const snapshot = await getFirebaseData(completedTasksRef);
//     if (snapshot.exists()) {
//       return {
//         data: snapshot.val(),
//       };
//     } else {
//       return {
//         data: "No data found",
//       };
//     }
//   } catch (error: any) {
//     return {
//       data: [],
//     };
//   }
// };

// export { getPost };
