"use client";
import { useState } from "react";
import React from "react";
import styles from "../styles/page.module.css";

const testimonials = [
  {
    name: "John Doe",
    text: "This is an amazing service! Highly recommended.",
    position: "Managing Director",
    image: "/images/user1.jpg",
  },
  {
    name: "Jane Smith",
    text: "I had a great experience with this company.",
    position: "CEO",
    image: "/images/user2.jpg",
  },
  {
    name: "Alex Johnson",
    text: "Fantastic customer support and quality products.",
    position: "Manager",
    image: "/images/user3.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className={styles.testimonialSlide}>
      <button onClick={prevSlide} className={styles.button}>
        &#10094;
      </button>
      <div>
        <h3 className="mt-2 font-semibold">{testimonials[current].name}</h3>
        <h4>{testimonials[current].position}</h4>
        <p className="text-lg italic">"{testimonials[current].text}"</p>
      </div>
      <button onClick={nextSlide} className={styles.button}>
        &#10095;
      </button>
    </div>
  );
}
