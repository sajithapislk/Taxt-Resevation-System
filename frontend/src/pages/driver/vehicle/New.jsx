// NewVehiclePage.js
import React, { useState } from 'react';
import UserService from '../../../services/UserService'; // Assuming this service handles API calls
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewVehiclePage = () => {
  const [formData, setFormData] = useState({
    driver_id: '',
    vehicle_type_id: '',
    cost_per_km: '',
    description: '',
    color: '',
    vehicle_number: '',
    passenger_seat: '',
    is_available_ac: 'false',
    max_load: '',
    image: '', // New field for image
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    // Generate an image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a form data object to handle file uploads
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Simulate API call to register a new vehicle
    const result = await UserService.registerVehicle(data);

    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage('Vehicle registered successfully!');
    }

    setIsLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2>Register New Vehicle</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <Form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          key !== 'image' && (
            <Form.Group key={key} className="mb-3">
              <Form.Label>{key.replace(/_/g, ' ').toUpperCase()}</Form.Label>
              {key === 'description' ? (
                <Form.Control
                  as="textarea"
                  rows={3}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              ) : key === 'is_available_ac' ? (
                <Form.Select name={key} value={formData[key]} onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              ) : (
                <Form.Control
                  type={['cost_per_km', 'max_load', 'passenger_seat', 'driver_id', 'vehicle_type_id'].includes(key) ? 'number' : 'text'}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              )}
            </Form.Group>
          )
        ))}
        
        {/* Image Upload Field */}
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Image</Form.Label>
          <Form.Control type="file" onChange={handleImageUpload} accept="image/*" />
        </Form.Group>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-3">
            <img src={imagePreview} alt="Vehicle Preview" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register Vehicle'}
        </Button>
      </Form>
    </div>
  );
};

export default NewVehiclePage;