import PropTypes from 'prop-types';
import Button from './components/Button/Button';

function Profile(props) {
  const { profile } = props;
  const { id, name, age, isActive } = profile;

  const styles = {
    border: '1px solid #c0c0c0',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
  }

  return (
    <div style={styles}>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'InActive'}</p>
      <Button>Detail</Button>
      {/* <Button/> */}
    </div>
  )
}

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    isActive: PropTypes.bool,
  })
}

export default Profile;
