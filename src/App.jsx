// import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './Profile';
import AddUser from './AddUser';
import { useState } from 'react';

function App() {
  // const profiles = [
  //   { id: 1, name: 'Mg Mg', age: 20, isActive: true },
  //   { id: 2, name: 'Ko Ko', age: 18, isActive: false },
  //   { id: 3, name: 'Su Su', age: 19, isActive: true },
  // ];
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles([
      ...profiles,
      { id: Date.now(), ...newProfile },
    ]);
  }

  return (
    <>
      <Header />
      <AddUser addProfile={addProfile} />
      {profiles.sort((a, b) => b.id - a.id).map(profile => (
        <Profile key={profile.id} profile={profile} />
      ))}
      <Footer />
    </>
  )
}

export default App
