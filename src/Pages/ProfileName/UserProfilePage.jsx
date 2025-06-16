import React, { useState, useEffect } from 'react';
import { User, MapPin, Phone } from 'lucide-react';
import { useAuth } from '../../Contexts/AuthContexts';
import './UserProfilePage.css';


// TELA DE PERFIL (AGORA UM FORMULÁRIO)
export function UserProfilePage() {
  const { user, saveUser } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Popula o formulário com os dados do usuário (se existirem)
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        address: user.address || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(formData); // This function should come from your AuthContext
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Fallback if user data or saveUser function isn't available yet
  // This is important if useAuth could return user/saveUser as undefined initially
  if (!user || typeof saveUser !== 'function') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-400">Carregando dados do perfil...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="profile-card">
        <div className="avatar-container">
          <img src={user.avatar} alt={user.name} className="avatar" />
        </div>

        <h1 className="username">{user.name}</h1>

        <div className="info">
          <div className="info-item">
            <User className="icon" />
            <div>
              <p className="label">Email</p>
              <p className="text">{user.email}</p>
            </div>
          </div>

          <div className="info-item">
            <MapPin className="icon" />
            <div>
              <p className="label">Endereço</p>
              <p className="text">{user.address}</p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="icon" />
            <div>
              <p className="label">Telefone</p>
              <p className="text">{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center animate-fade-in py-10"> {/* Added py-10 for some vertical spacing */}
        <div className="w-full max-w-lg bg-[#000316] border border-[#3c0753] p-8 rounded-lg shadow-xl"> {/* Added shadow-xl */}
            <h1 className="text-3xl text-[#c4d4e7] font-serif mb-6 text-center">Meu Perfil</h1>
            {user && user.avatar && (
              <img src={user.avatar} alt={user.name || 'User Avatar'} className="w-32 h-32 rounded-full border-4 border-[#720455] mx-auto mb-6 object-cover" />
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-bold mb-2 text-[#c4d4e7]/80" htmlFor="name">Nome</label>
                    <input
                        type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                        className="w-full p-3 rounded-md bg-[#3c0753]/30 border border-[#3c0753] text-white focus:outline-none focus:ring-2 focus:ring-[#720455]"
                        placeholder="Seu nome completo" required
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2 text-[#c4d4e7]/80" htmlFor="email">Email</label>
                    <input
                        type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                        className="w-full p-3 rounded-md bg-[#3c0753]/30 border border-[#3c0753] text-white focus:outline-none focus:ring-2 focus:ring-[#720455]"
                        placeholder="seu.email@exemplo.com" required
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold mb-2 text-[#c4d4e7]/80" htmlFor="address">Endereço</label>
                    <input
                        type="text" name="address" id="address" value={formData.address} onChange={handleChange}
                        className="w-full p-3 rounded-md bg-[#3c0753]/30 border border-[#3c0753] text-white focus:outline-none focus:ring-2 focus:ring-[#720455]"
                        placeholder="Sua rua, número, cidade"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-bold mb-2 text-[#c4d4e7]/80" htmlFor="phone">Telefone</label>
                    <input
                        type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                        className="w-full p-3 rounded-md bg-[#3c0753]/30 border border-[#3c0753] text-white focus:outline-none focus:ring-2 focus:ring-[#720455]"
                        placeholder="(XX) XXXXX-XXXX"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mt-6 bg-[#720455] text-white font-bold py-3 px-6 rounded-md hover:bg-[#3c0753] transition-colors duration-300"
                >
                    Salvar Alterações
                </button>
                 {showSuccess && (
                    <p className="text-center text-green-400 mt-4">Perfil salvo com sucesso!</p>
                )}
            </form>
        </div>
      </div>
    </div>
   );
 }
