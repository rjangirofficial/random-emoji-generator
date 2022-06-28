import { useState } from 'react'

function App() {

  const [emoji, setEmoji] = useState("&#128151;")
  const [loading, setLodaing] = useState(false)

  const EmojiGenerator = async () => {
    setLodaing(true)
    const resp = await fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const result = await resp.json()
    setEmoji(result['emoji'])
    document.getElementById('emoji_tag').innerHTML = emoji
    setLodaing(false)
  }

  return (
    <>

      <div className="main">
        <h3 className='title'>Random Emoji Generator</h3>
        <h1 id='emoji_tag'> </h1>
        {
          loading && <h3 className='generating'>Generating</h3>
        }
        <button className='gen_btn' onClick={EmojiGenerator}>Generate Emoji</button>

        <div className="social_box">
          <a href='https://github.com/rjangirofficial' rel="noreferrer"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </>
  );
}

export default App;
