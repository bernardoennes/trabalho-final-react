import React from 'react';
import { User, MapPin, Phone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './UserProfilePage.css';

export function UserProfilePage() {
  const { user } = useAuth();

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
    </div>
  );
}