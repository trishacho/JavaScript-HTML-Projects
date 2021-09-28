import React, { useEffect, useState } from "react" // effect and state hook

function usePosts() { // declaring a function "usePosts"
  const [posts, setPosts] = useState([])  // declaring a new state variable
  
  useEffect(() => { 
      // Using the Fetch API
      fetch("https://api.hackillinois.org/upload/blobstore/mentors/")
      .then(response => response.json())
      .then(output => { 
            setPosts(output.data) 
            console.log()
      })
  }
  , []) // 

  return posts // returning posts array
}

export default function Example() {
  const posts = usePosts() 

  return ( 
    <div style={{backgroundImage: 'url("https://camo.githubusercontent.com/e23238aae4cb8c485e6949cea444757d0eb84489018c4e4d487d18b2bb7ab294/68747470733a2f2f7765626772616469656e74732e636f6d2f7075626c69632f7765626772616469656e74735f706e672f313538253230416e67656c253230436172652e706e67")',
                 backgroundRepeat: 'no-repeat', backgroundSize: '10000px'}}> {/* styling webpage with a background! */}
    <h1 title="HackIllinois Mentor List" style={{fontFamily: 'arial', fontSize: '40px', textDecorationLine: 'underline'}}>HackIllinois Mentors</h1> {/* styling title with font, size, underlining */}
    {posts.length > 0 ? (
        posts.map(item => (
          <ul style={{display:'inline'}}> {/* un-bulleted list displaying inline */}
            <h2 style={{backgroundColor: "powderblue", padding: '10px', fontSize: '30px', fontFamily: 'arial'}}>{item.firstName} {item.lastName}</h2> {/* first name and last name styling */}
            <img src = {item.profile} alt = "The mentor" width = "15%" height = "15%"/> {/* making sure the pictures are the same size but still keep their ratio + adding accessibility for pictures */}
            <h2 style={{fontSize: '18px', fontWeight: 'normal', fontFamily: 'arial'}}>{item.description}</h2> {/* styling the information blurbs */}
          </ul>
        ))
    ) : (
            <h1>HackIllinois mentors are loading!</h1>
        )
    }
    </div>
  )
}
