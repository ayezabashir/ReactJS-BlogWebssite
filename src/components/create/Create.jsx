import React from 'react'

const Create = () => {
    return (
        <>
            <section className="new-post">
                <div className="container">
                    <div className="image">
                        <img src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="user-img" />
                    </div>
                    <form>
                        <div className="input-file">
                            <input type="file" />
                        </div>
                        <input type="text" placeholder="title" />
                        <textarea rows="10" columns='30'></textarea>
                        <button className='btn'>Create Post</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Create
