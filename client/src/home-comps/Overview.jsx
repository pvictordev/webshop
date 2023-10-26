import React from "react";
import "../styles/home/overview.scss";

export default function Overview() {
  return (
    <section className="Overview">
      <div className="Overview__grid">
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1625698311031-f0dd15be5144?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"
              alt="Clothes"
            />

            <div className="card__overlay">
              <h2>Clothes</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887"
              alt="furniture"
            />

            <div className="card__overlay">
              <h2>Furniture</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
              alt="household"
            />

            <div className="card__overlay">
              <h2>Household</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1856"
              alt="electronics"
            />
            <div className="card__overlay">
              <h2>Electronics</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1629732097571-b042b35aa3ed?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
              alt="Skin care"
            />

            <div className="card__overlay">
              <h2>Skin care</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <img
              src="https://images.unsplash.com/photo-1632737606691-4912f4283205?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
              alt="Toys"
            />
            <div className="card__overlay">
              <h2>Toys</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
