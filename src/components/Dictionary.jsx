import React from "react";
import "./DictionaryResult.css";

const DictionaryResult = ({ data }) => {
  return (
    <div className="dictionary-result">
      {data.map((item, index) => (
        <div key={index} className="dictionary-item">
          <h2>{item.word}</h2>
          <h3>Phonetics:</h3>
          <ul>
            {item.phonetics.map((phonetic, phoneticIndex) => (
              <li key={phoneticIndex}>
                <p>Text: {phonetic.text}</p>
                <p>Audio: {phonetic.audio}</p>
                {phonetic.sourceUrl && (
                  <p>
                    Source:{" "}
                    <a href={phonetic.sourceUrl}>{phonetic.sourceUrl}</a>
                  </p>
                )}
                {phonetic.license && (
                  <p>
                    License:{" "}
                    <a href={phonetic.license.url}>{phonetic.license.name}</a>
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h3>Meanings:</h3>
          {item.meanings.map((meaning, meaningIndex) => (
            <div key={meaningIndex} className="meaning-item">
              <h4>Part of Speech: {meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, definitionIndex) => (
                  <li key={definitionIndex}>
                    <p>Definition: {definition.definition}</p>
                    {definition.example && <p>Example: {definition.example}</p>}
                    {definition.synonyms.length > 0 && (
                      <p>Synonyms: {definition.synonyms.join(", ")}</p>
                    )}
                    {definition.antonyms.length > 0 && (
                      <p>Antonyms: {definition.antonyms.join(", ")}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <h3>Source URLs:</h3>
          <ul>
            {item.sourceUrls.map((url, urlIndex) => (
              <li key={urlIndex}>
                <a href={url}>{url}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DictionaryResult;
