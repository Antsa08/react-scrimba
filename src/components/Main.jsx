import React from 'react'

export default function Main({ image, top, bottom }) {

    const [memes, setMemes] = React.useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: image
    });

    const [count, setCount] = React.useState(0);

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(function() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    async function setMeme() {
        const integerFromRandom = Math.floor(Math.random() * await allMemes.length)
        setMemes(function(prevMeme) {
            return {
                ...prevMeme,
                imageUrl: allMemes[integerFromRandom].url
            }
        })
    }

    function loadMemes(e) {
        let { name, value } = e.currentTarget;

        setMemes(prevMemes => ({
            ...prevMemes,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="ex: One does not simply"
                        name="topText"
                        value={ memes.topText }
                        onChange={ loadMemes }
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={ memes.bottomText }
                        onChange={ loadMemes }
                    />
                </label>
                <button onClick={ setMeme }>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={ memes.imageUrl } />
                <span className="top">{ memes.topText }</span>
                <span className="bottom">{ memes.bottomText }</span>
            </div>
        </main>
    )
}