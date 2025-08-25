// components/SocialMedia.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <a
                href="https://www.facebook.com/people/CARLO-Acutis-Chascomus-Argentina/61573008124011/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebook
                    className="text-blue-500 hover:text-blue-700"
                    size={30}
                />
            </a>
            <a
                href="https://www.instagram.com/carloacutischascomus/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram
                    className="text-pink-500 hover:text-pink-700"
                    size={30}
                />
            </a>
            <a
                href="https://www.tiktok.com/@carloacutischasmo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTiktok
                    className="text-black hover:text-gray-700"
                    size={30}
                />
            </a>
            <a
                href="https://wa.me/+5492241699557"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp
                    className="text-green-500 hover:text-green-700"
                    size={30}
                />
            </a>
        </div>
    );
};

export default SocialMedia;
