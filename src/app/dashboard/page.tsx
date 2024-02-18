"use client";

import { useAuth } from "../../../firebase/auth";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase/firebase";
import { ClockIcon } from "@heroicons/react/24/solid";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AnimatedBook = () => {
    return (
        <div className="book">
            <span className="page turn"></span>
            <span className="page turn"></span>
            <span className="page turn"></span>
            <span className="page turn"></span>
            <span className="page turn"></span>
            <span className="page turn"></span>
            <span className="cover"></span>
            <span className="page"></span>
            <span className="cover turn"></span>
        </div>
    );
};

export default function Page() {
    const { authUser } = useAuth();

    console.log(authUser);

    return (
        <>
            <style>{`

.book { /* Corrected class name */
position: fixed;
bottom: 20px;
right: 50px;
margin: auto;
width: 18.5rem;
height: 12.5rem;
perspective: 70rem;
}
.cover {
background-color: #36354e;
transform: rotateY(0deg);
width: 9.25rem;
height: 12.5rem;
}
.page {
top: 0.25rem;
left: 0.25rem;
background-color: #e9e6c4;
transform: rotateY(0deg);
width: 9rem;
height: 12rem;
text-align: right;
font-size: 8px;
color: #777;
font-family: monospace;
}
.page::before, .page::after {
display: block;
border-top: 1px dashed rgba(0, 0, 0, 0.3);
content: "";
padding-bottom: 1rem;
}
.cover, .page {
position: absolute;
padding: 1rem;
transform-origin: 100% 0;
border-radius: 5px 0 0 5px;
box-shadow: inset 3px 0px 20px rgba(0, 0, 0, 0.2),
0px 0px 15px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
}
.cover.turn {
animation: bookCover 3s forwards;
}
.page.turn {
animation: bookOpen 3s forwards;
}
.page:nth-of-type(1) {
animation-delay: 0.05s;
}
.page:nth-of-type(2) {
animation-delay: 0.33s;
}
.page:nth-of-type(3) {
animation-delay: 0.66s;
}
.page:nth-of-type(4) {
animation: bookOpen150deg 3s forwards;
animation-delay: 0.99s;
}
.page:nth-of-type(5) {
animation: bookOpen30deg 3s forwards;
animation-delay: 1.2s;
}
.page:nth-of-type(6) {
animation: bookOpen55deg 3s forwards;
animation-delay: 1.25s;
}
@keyframes bookOpen {
30% { z-index: 999; }
100% { transform: rotateY(180deg); z-index: 999; }
}
@keyframes bookCover {
30% { z-index: 999; }
100% { transform: rotateY(180deg); z-index: 1; }
}
@keyframes bookOpen150deg {
30% { z-index: 999; }
100% { transform: rotateY(150deg); z-index: 999; }
}
@keyframes bookOpen55deg {
30% { z-index: 999; }
100% { transform: rotateY(55deg); z-index: 999; }
}
@keyframes bookOpen30deg {
50% { z-index: 999; }
100% { transform: rotateY(30deg); z-index: 999; }
}
                .react-calendar {
                    max-width: 100%;
                    background-color: #1c1c1c;
                    color: white;
                    border-radius: 8px;
                    font-size: 1em; /* Adjust the font size if needed */
                }

                .react-calendar__tile--active,
                .react-calendar__tile--active:enabled:hover,
                .react-calendar__tile--active:enabled:focus {
                    background-color: #6495ed;
                    border-radius: 8px;
                }

                .react-calendar__tile {
                    border-radius: 8px;
                    height: 3em; /* Increase the height of the tiles */
                }

                .react-calendar__tile--now {
                    background-color: #6495ed;
                    border-radius: 8px;
                }
				
				/* Adjust the size of the navigation buttons */
				.react-calendar__navigation button {
					min-width: 44px;
					min-height: 44px;
				}
				
				/* Adjust the heading (month, year) size */
				.react-calendar__navigation {
					font-size: 1.4em;
				}

            `}</style>
            <div className="flex">
			<div className="flex-grow">
  <div className="heading-container p-12">
    <h1 className="text-secondaryText font-semibold text-3xl mb-8">
      Elevate Your Interview Skills, One Question at a Time.
    </h1>
  </div>
  {/* New container below the heading */}
  <div className="content-container p-12">
    <p className="text-secondaryText text-xl mb-6">
	<div style={{ fontFamily: 'Arial, sans-serif' }}>
      <main >
        <div style={{ width: '700px', backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <section style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>Overall Score</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<div>
              {/* Score representation as a circular progress bar */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                background: 'conic-gradient(#6495ed 0%, #6495ed 71%, #ddd 71%, #ddd 100%)' // Adjust the percentage to match the score dynamically
              }}>
                <div style={{
                  position: 'absolute',
                  background: '#fff',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '24px', color: '#333' }}>71</span>
                </div>
              </div>
            </div>
            <div>
              <p style={{ marginTop: '10px', fontSize: '14px', color: '#777' }}>
                Your score is out of 100.<br />Aim for a score of 90+
              </p>
            </div>
          </div>
          </section>
          <section>
            <h3 style={{ color: '#333', marginBottom: '20px' }}>Steps to improve your score</h3>
            <p style={{ color: '#777', marginBottom: '20px' }}>
              Decent start, but there's still room for improvement! Tailor your resume to the job description by including relevant work experiences, skills, and keywords that match the requirements of the position.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #eee', borderRadius: '5px' }}>
                <h4 style={{ color: '#333' }}>SUMMARY</h4>
                <button style={{ backgroundColor: '#6495ed', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>
                  View
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </p>
    {/* You can add more content here such as text, images, buttons, etc. */}
  </div>
</div>

                <div className="calendar-container p-4">
                    <Calendar />
                </div>
				
            </div>
		
			<AnimatedBook/>
        </>
    );
}