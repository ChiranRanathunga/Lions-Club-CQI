import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function getTier(email){
  const role = CQI.roles[email];
  if(role) return role;
  if(email.endsWith("@lions306d6.lk")) return "tier2";
  return "tier3";
}
async function loginWithGoogle(){
  try{
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const tier = getTier(user.email);
    sessionStorage.setItem("cqi_tier", tier);
    sessionStorage.setItem("cqi_email", user.email);
    sessionStorage.setItem("cqi_name", user.displayName||user.email);
    return {user, tier};
  }catch(e){
    console.error(e);
    if(e.code==="auth/popup-blocked") showToast("Please allow popups for login","warning");
    throw e;
  }
}
async function logout(){
  await signOut(auth);
  sessionStorage.clear();
  location.href = "../index.html";
}
onAuthStateChanged(auth, user => {
  if(user && typeof updateNavAuth === "function") updateNavAuth(user);
});
window.loginWithGoogle = loginWithGoogle;
window.logout = logout;
window.getTier = getTier;
