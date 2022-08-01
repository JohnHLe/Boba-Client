import React, { useState } from 'react';
import '../App.css';
import './css/HeroSection.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function HeroSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="hero-container">
      <video src="/videos/reactvid.mp4" autoPlay loop muted />
      <h1>Good Times, Good Boba</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="/sign-up">
          <button className={`btn ${"btn--outline"} ${"btn--large"}`}>
            GET STARTED
          </button>
        </Link>
        <button
          className={`btn ${"btn--primary"} ${"btn--large"}`}
          onClick={() => setOpenModal(true)}
        >
          WATCH PREVIEW <i className="far fa-play-circle" />
        </button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
        </Modal>
      </div>
    </div>
  );
}

export default HeroSection;