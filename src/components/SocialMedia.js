// components/SocialMedia.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <a href="https://www.facebook.com/groups/932192168926656/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-500 hover:text-blue-700" size={30} />
      </a>
      <a href="https://www.instagram.com/chascomus_acutiscarlo" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 hover:text-pink-700" size={30} />
      </a>

    </div>
  );
};

export default SocialMedia;
