// components/ContactForm.js
import { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Importa el estilo de la librería

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        tel: '',
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({}); // Estado para guardar los errores

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, tel: value });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validación de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email =
                'Por favor, ingresa un correo electrónico válido.';
        }

        // Validación de teléfono (comprobación si el teléfono es válido o no)
        if (!formData.tel) {
            newErrors.tel = 'Por favor, ingresa tu número de teléfono.';
        }

        // Si hay errores, no enviamos el formulario
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validamos el formulario antes de enviarlo
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setStatus('Por favor, corrige los errores.');
            return;
        }

        // Si no hay errores, enviamos el formulario con emailjs
        emailjs
            .sendForm(
                'Carlo-Acutis', // Reemplaza con tu service ID
                'template_Carlo-Acutis', // Reemplaza con tu template ID
                e.target,
                '6j0gT46VQm7q2bU7V' // Reemplaza con tu User ID de EmailJS
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus('Mensaje enviado con éxito');
                    setErrors({}); // Limpiar errores si el envío fue exitoso
                },
                (error) => {
                    console.log(error.text);
                    setStatus('Hubo un error al enviar el mensaje');
                }
            );

        setFormData({ name: '', email: '', message: '', tel: '' }); // Limpiar formulario
    };

    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Correo electrónico */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@dominio.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Teléfono con banderitas - Argentina como país por defecto */}
                    <div>
                        <PhoneInput
                            international
                            name="tel"
                            defaultCountry="AR" // Establecer Argentina como país por defecto
                            value={formData.tel}
                            onChange={handlePhoneChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Agrega tu teléfono"
                        />
                        {errors.tel && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.tel}
                            </p>
                        )}
                    </div>

                    {/* Mensaje */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                    </div>

                    {/* Botón de envío */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Enviar
                        </button>
                    </div>
                </form>

                {/* Mensaje de estado */}
                {status && (
                    <p className="text-center text-green-500 mt-4">{status}</p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
