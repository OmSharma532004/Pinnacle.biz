import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MetaTags from '../../components/MetaTag';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/user/getProfile');
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center h-screen p-3">
        <Loader loading={loading} message={'Loading profile'} />
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <p className="text-lg">No profile is made.</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => {
              navigate('/createProfile');
            }}
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  const {
    fullName,
    phoneNumber,
    experience,
    specialization,
    education,
    resume,
    linkedIn,
    organization,
    contactMethod,
  } = userProfile;

  return (
    <div className="container mx-auto p-6">
      <MetaTags/>
      <Loader loading={loading} message={'Loading profile'} />
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Full Name:</h2>
            <p className="text-gray-700">{fullName}</p>
          </div>
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Phone:</h2>
            <p className="text-gray-700">{phoneNumber}</p>
          </div>
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Experience:</h2>
            <p className="text-gray-700">{experience}</p>
          </div>
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Specialization:</h2>
            <p className="text-gray-700">{specialization}</p>
          </div>
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Education:</h2>
            <p className="text-gray-700">{education}</p>
          </div >
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Organization:</h2>
            <p className="text-gray-700">{organization}</p>
          </div>
          <div  className=' flex items-center justify-center gap-4'>
            <h2 className="text-lg font-semibold">Contact Method:</h2>
            <p className="text-gray-700">{contactMethod}</p>
          </div>
          {linkedIn && (
            <div  className=' flex items-center justify-center gap-4'>
              <h2 className="text-lg font-semibold">LinkedIn:</h2>
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View LinkedIn
              </a>
            </div>
          )}
         <div className=' flex flex-col gap-5 items-center justify-center'>
         {resume ? (
            <div className="col-span-2">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                View Resume
              </a>
            </div>
          ) : (
            <div className="col-span-2">
              <Link to={`/editProfile/${userProfile.userId}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Resume
                </button>
              </Link>
            </div>
          )}
          <div className="col-span-2">
            <Link to={`/editProfile/${userProfile.userId}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Edit Profile
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
