import { useRef, useState, useEffect } from "react";
import "./main.css";
import "bulma/css/bulma.css";
import { useReactToPrint } from 'react-to-print';

function Main({ onUpdateRef }) {
  const [formState, setFormState] = useState({
    name: "Asturias Lorem Ipsum",
    profession: "Full Stack Web Developer",
    phone: "+55 27 99123-4567",
    email: "asturiasthegreat@gmail.com",
    location: "Vitória, ES - Brasil",
    portfolio: "github.com/me",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur iste sequi iure, dolores optio excepturi dicta beatae numquam expedita unde accusantium doloribus quibusdam odio quis non, pariatur deleniti laborum. Sapiente!",
    experience:
      "Doloremque dolorum repellendus commodi eius explicabo laudantium qui, maxime doloribus laborum dolor iste ipsum. Doloremque dolorum repellendus commodi eius explicabo laudantium qui, maxime doloribus laborum dolor iste ipsum. Doloremque dolorum repellendus commodi eius explicabo laudantium qui, maxime doloribus laborum dolor iste ipsum. Doloremque dolorum repellendus commodi eius explicabo laudantium qui, maxime doloribus laborum dolor iste ipsum.",
    education:
      "Repellat provident nam, culpa explicabo quaerat fugiat eius reiciendis consequuntur ut perferendis optio magnam eos dicta ratione deserunt adipisci. Molestias, fugiat corporis. Doloremque dolorum repellendus commodi eius explicabo laudantium qui, maxime doloribus laborum dolor iste ipsum.",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const divRef = useRef(null);  

  useEffect(() => {
    onUpdateRef(divRef.current);
  }, [onUpdateRef]);


  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="inputs">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleFormChange}
              placeholder="Full Name"
            />
            <br></br>
            <input
              type="text"
              name="profession"
              value={formState.profession}
              onChange={handleFormChange}
              placeholder="Profession"
            />
            <br></br>
            <input
              type="text"
              name="phone"
              value={formState.phone}
              onChange={handleFormChange}
              placeholder="Phone Number"
            />
            <br></br>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={handleFormChange}
              placeholder="E-mail"
            />
            <br></br>
            <input
              type="text"
              name="location"
              value={formState.location}
              onChange={handleFormChange}
              placeholder="Location"
            />
            <br></br>
            <input
              type="text"
              name="portfolio"
              value={formState.portfolio}
              onChange={handleFormChange}
              placeholder="Portfolio"
            />
            <br></br>
            <textarea
              rows={5}
              type="text"
              name="abstract"
              value={formState.abstract}
              onChange={handleFormChange}
              placeholder="Resume - Abstract - Summary"
            />
            <br></br>
            <textarea
              rows={5}
              type="text"
              name="experience"
              value={formState.experience}
              onChange={handleFormChange}
              placeholder="Jobs Experience"
            />
            <br></br>
            <textarea
              rows={5}
              type="text"
              name="education"
              value={formState.education}
              onChange={handleFormChange}
              placeholder="Education"
            
            />
            <br></br>
          </div>
        </div>
        <div className="column columnRight">
          <div className="cvBorder" ref={divRef}>
            <div className="columnInside">
              <h1 className="name">{formState.name}</h1>
              <h3 className="title">{formState.profession}</h3>
              <hr className="divider" />
              <ul className="contact">
                <li>{formState.phone}</li>
                <li>{formState.email}</li>
                <li>{formState.location}</li>
                <li>{formState.portfolio}</li>
              </ul>
            </div>
            <div className="columnInside">
              <h2 className="section-title">Resumo</h2>
              <p className="section-content">{formState.abstract}</p>
              <h2 className="section-title">Experiência</h2>
              <p className="section-content">{formState.experience}</p>
              <h2 className="section-title">Educação</h2>
              <p className="section-content">{formState.education}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
