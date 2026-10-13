import React from "react";

import "./CreateCharacter.css";

import { characterRaces } from "../data/CharacterRace";
import { characterClasses } from "../data/CharacterClass";
import { characterBackgrounds } from "../data/CharacterBackground";
import type { CreateCharacterRequest } from "../interface/CreateCharacterRequest";
import { postCharacterDraft } from "../services/CharacterService";

export default function CriarPersonagem() {
  const [CharacterName, setCharacterName] = React.useState("");
  const [CharacterRace, setCharacterRace] = React.useState("");
  const [CharacterClass, setCharacterClass] = React.useState("");
  const [CharacterBackground, setCharacterBackground] = React.useState("");

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const characterData: CreateCharacterRequest = {
      name: CharacterName,
      raceId: CharacterRace,
      classId: CharacterClass,
      backgroundId: CharacterBackground,
    };
    const createdCharacter = await postCharacterDraft(characterData);
    console.log(createdCharacter);
  };

  return (
    <div className="character-creation">
      <section className="character-creation-card">
        <header className="character-creation-header">
          <h1>Criação de Personagem</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="character-creation-fieldset">
            <div className="character-creation-container">
              <label htmlFor="CharacterName">Nome</label>
              <input
                type="text"
                value={CharacterName}
                id="CharacterName"
                placeholder="Nome do personagem"
                onChange={(CharacterName) =>
                  setCharacterName(CharacterName.target.value)
                }
              />

              <label htmlFor="CharacterRace">Raça</label>
              <select
                id="CharacterRace"
                className="race-input"
                value={CharacterRace}
                onChange={(CharacterRace) =>
                  setCharacterRace(CharacterRace.target.value)
                }
              >
                <option value="">Selecione uma raça</option>
                {characterRaces.map((characterRace) => (
                  <option key={characterRace.id} value={characterRace.id}>
                    {characterRace.name}
                  </option>
                ))}
              </select>

              <label htmlFor="CharacterClass">Classe</label>
              <select
                id="CharacterClass"
                className="classe-input"
                value={CharacterClass}
                onChange={(CharacterClass) =>
                  setCharacterClass(CharacterClass.target.value)
                }
              >
                <option value="">Selecione uma classe</option>
                {characterClasses.map((characterClass) => (
                  <option key={characterClass.id} value={characterClass.id}>
                    {characterClass.name}
                  </option>
                ))}
              </select>

              <label htmlFor="CharacterBackground">Origem</label>
              <select
                id="CharacterBackground"
                className="background-input"
                value={CharacterBackground}
                onChange={(CharacterBackground) =>
                  setCharacterBackground(CharacterBackground.target.value)
                }
              >
                <option value="">Selecione uma origem</option>
                {characterBackgrounds.map((characterBackground) => (
                  <option
                    key={characterBackground.id}
                    value={characterBackground.id}
                  >
                    {characterBackground.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="character-creation-actions">
            <button className="btn-submit" type="submit">
              Começar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
