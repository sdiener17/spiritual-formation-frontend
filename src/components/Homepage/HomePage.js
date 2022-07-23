import react, {useEffect, useState} from "react"

export default function HomePage(){
    const [isLoaded, setIsLoaded] = useState("loading");
    const [error, setError] = useState(false);
    const [homePageData, setHomePageData] = useState({
        translations: [],
        scriptureMemorized: 0,
        percentWritten: 0,
        randomInsight: "",
        timesRead: 0,
        timesMem: 0,
        averageQTQuality: 0
    });

    useEffect(()=>{
        console.log("INSIDE USE EFFECT");
        fetch("http://localhost:5000/get-translations", {
            method: "get",
            headers: {
              //"Content-Type": "application/json",
              //"Access-Control-Allow-Credentials": true,
            }
          })
            .then((res) => res.json())
            .then(
              (result) => {
                console.log(result);
                try {
                  var translations = result.data;
                  var scriptureMemorized= 0;
                  var percentWritten = 0;
                  var randomInsight = "";
                  var timesRead = 0;
                  var timesMem = 0;
                  var averageQTQuality = 0;
                  setHomePageData({
                    translations: translations,
                    scriptureMemorized: scriptureMemorized,
                    percentWritten: percentWritten
                  });
                  

                } catch (execption) {
                  setIsLoaded("error");
                }
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded("error");
                setError(error);
                console.log(error);
              }
            );
    },[]);

    return(
        <section>
            <h1>Hello from homepage</h1>
            <p>This is the content that contains all your data!</p>
            {homePageData.translations.map((translation) =>{
                return (<div>{translation.translation}</div>)
            })}
        </section>
    )
}