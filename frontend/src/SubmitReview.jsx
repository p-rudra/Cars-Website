import axios from 'axios';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function SubmitReview({ carId, carType }) {
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const submitReview = () => {
        axios.post('http://127.0.0.1:8000/review/', {
            car_id: carId, 
            car_type: carType,
            rating: rating,
            description: description,
        })
        .then(response => {
            toast.success('Review submitted successfully!',{autoClose:4000})
            setTimeout(() => {
                window.location.reload();
              }, 5000); 
            console.log('Review submitted successfully:', response.data);
        })
        .catch(error => {
            console.error('Error submitting review:', error);
        });
    };  

    return (
        <div className="container my-4" style={{border:'none'}}>
        <h3 className="text-center mb-4">Submit a Review</h3>
        <div className="card shadow-sm p-4">
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                    Rating (1-5)
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="rating"
                    placeholder="Enter rating"
                    value={rating}
                    min="1"
                    max="5"
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    placeholder="Enter your review here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button className="btn btn-primary w-100" onClick={submitReview}>
                Submit Review
            </button>
        </div>
        <ToastContainer/>
    </div>
    );
}

export default SubmitReview;